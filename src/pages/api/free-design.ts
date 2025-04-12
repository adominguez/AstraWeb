import type { APIRoute } from "astro";
import { Resend } from 'resend';
import EmailTemplate from '@email/EmailTemplate';
import renderToString from 'preact-render-to-string';
import { sendLead } from "@lib/fbEvents";
import { createFolder, uploadFile, createTextSummaryFile } from "@lib/google";
import { generateTextSummary } from "@lib/utils";
import fs from 'fs';

const CLIENT_FOLDER_ID = import.meta.env.CLIENT_FOLDER_ID;
const apiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const fullName = form.get('fullName')?.toString() ?? '';
  const email = form.get('email')?.toString() ?? '';
  const phone = form.get('phone')?.toString() ?? '';
  const project = form.get('project')?.toString() ?? '';
  const web = form.get('web')?.toString() ?? '';
  const projectType = form.get('projectType')?.toString() ?? '';
  const projectDetails = form.get('projectDetails')?.toString() ?? '';
  const privacyPolicy = form.get('privacyPolicy')?.toString() ?? '';
  const url = form.get('url')?.toString() ?? '';

  const materials = form.getAll('materials');
  const uploadedUrls: string[] = [];

  // Crear una carpeta en Google Drive para este proyecto
  const folderName = `free_design_${fullName}_${project}`;
  const folderId = await createFolder(folderName, CLIENT_FOLDER_ID);

  for (const file of materials) {
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const tempPath = `/tmp/${file.name}`;

      fs.writeFileSync(tempPath, buffer);

      const uploaded = await uploadFile(tempPath, file.name, folderId, file.type || 'application/octet-stream');

      if (uploaded?.webViewLink) {
        uploadedUrls.push(uploaded.webViewLink);
      }

      fs.unlinkSync(tempPath);
    }
  }

  const summary = generateTextSummary(form);

  await createTextSummaryFile(folderId, 'resumen.txt', summary);

  const emailHtml: string = renderToString(
    EmailTemplate({
      fullName,
      email,
      phone,
      project,
      web,
      projectType,
      projectDetails,
      privacyPolicy,
      uploadedUrls,
    })
  );

  const { data, error } = await resend.emails.send({
    from: 'AstraHub <info@astrahub.dev>',
    to: [email],
    subject: 'Envío desde el formulario de contacto',
    html: emailHtml,
  });

  const { data: dataSelf } = await resend.emails.send({
    from: 'AstraHub <info@astrahub.dev>',
    to: ['dmartin.alberto@gmail.com', 'info@astrahub.dev'],
    subject: `⭐ Nuevo formulario de contacto de ${fullName}`,
    html: emailHtml,
  });

  await sendLead({ fullName, email, phone }, url);

  return new Response(
    JSON.stringify({
      message: 'Formulario enviado',
      uploadedUrls,
      status: data?.id && dataSelf?.id ? 200 : 400
    }),
  );
};
