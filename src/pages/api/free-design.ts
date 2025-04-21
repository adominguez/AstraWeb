// @ts-nocheck
import type { APIRoute } from "astro";
import { Resend } from 'resend';
import WelcomeFreeTemplate from '@email/WelcomeFreeTemplate';
import { sendLead } from "@lib/fbEvents";
import renderToString from 'preact-render-to-string';
import { sendMessage } from "@lib/twilio";
import { createFolder, uploadFile, createTextSummaryFile } from "@lib/google";
import { generateTextSummary } from "@lib/utils";
import { insertNewUser } from "@lib/turso";
import fs from 'fs';

const CLIENT_FOLDER_ID = import.meta.env.CLIENT_FOLDER_ID;
const apiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

const type = 'FREE_DESIGN';

export const POST: APIRoute = async ({ request }) => {
  console.log('Se inicia el proceso de envío del formulario');
  try {
    const form = await request.formData();
    const fullName = form.get('fullName')?.toString() ?? '';
    const email = form.get('email')?.toString() ?? '';
    const phone = form.get('phone')?.toString() ?? '';
    const project = form.get('project')?.toString() ?? '';
    const url = form.get('url')?.toString() ?? '';
    const web = form.get('web')?.toString() ?? '';
    const socialUser = form.get('socialUser')?.toString() ?? '';
    const projectType = form.get('projectType')?.toString() ?? '';
    const projectDetails = form.get('projectDetails')?.toString() ?? '';
    const privacyPolicy = form.get('privacyPolicy')?.toString() ?? '';
    const source = type;
    form.set('source', type);
  
    console.log('Se obtienen los datos del formulario');
  
    const materials = form.getAll('materials');
    const uploadedUrls: string[] = [];
  
    // Crear una carpeta en Google Drive para este proyecto
    const folderName = `${type}_${fullName}_${project}`;
    const folderId = await createFolder(folderName, CLIENT_FOLDER_ID);
    console.log('Se crea la carpeta en Google Drive');

    for (const file of materials) {
      if (file instanceof File) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const tempPath = `/tmp/${file.name}`;
  
        fs.writeFileSync(tempPath, buffer);
  
        const uploaded = await uploadFile(tempPath, file.name, folderId, file.type || 'application/octet-stream');

        console.log('Se sube el archivo a Google Drive');
  
        if (uploaded?.webViewLink) {
          uploadedUrls.push(uploaded.webViewLink);
        }
  
        fs.unlinkSync(tempPath);
      }
    }
    console.log('Se suben los archivos a Google Drive');
  
    const userParams = [
      fullName,
      email,
      phone,
      socialUser,
      project,
      source,
      web,
      projectType,
      projectDetails,
      uploadedUrls,
      privacyPolicy
    ];
  
    const summary = generateTextSummary(form);
    console.log('Se genera el resumen del formulario');
  
    await createTextSummaryFile(folderId, 'resumen.txt', summary);
    console.log('Se crea añade el archivo de resumen en Google Drive');
  
    await insertNewUser(userParams);
    console.log('Se insertan los datos en la base de datos');
  
    // Enviar un mensaje por WhatsApp
    await sendMessage({message: `🚀 Nueva participación desde el formulario:\n\n👤 Nombre: ${fullName}\n📧 Email: ${email}\n💬 Mensaje: ${summary}`})
    console.log('Se envía el mensaje por WhatsApp');
    
    const html: string = renderToString(WelcomeFreeTemplate({fullName}));
  
    // Enviar el mensaje por email al usuario
    await resend.emails.send({
      from: 'AstraHub <info@astrahub.dev>',
      to: [email],
      subject: '¡Gracias por compartir tu proyecto! 🌟',
      html,
    });
    console.log('Se envía el mensaje por email al usuario');
  
    await sendLead({ fullName, email, phone }, url);
    console.log('Se envía el evento a Facebook');
  
    return new Response(
      JSON.stringify({
        message: 'Formulario enviado',
        uploadedUrls,
        status: 200
      }),
    );    
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Error al enviar el formulario',
        error,
        status: 500
      }),
    );
  }
};
