import type { APIRoute } from "astro";
import { Resend } from 'resend';
import EmailTemplate from '@email/EmailTemplate';
import renderToString from 'preact-render-to-string';
import { sendContact } from "@lib/fbEvents";
// import { getI18N } from "@/shared/i18n";
// import CompanyEmailTemplate from '@/en/email-template/CompanyEmailTemplate';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const resend = new Resend(apiKey);
  const form = await request.formData();
  const fullName = form.get('fullName')?.toString() ?? '';
  const email = form.get('email')?.toString() ?? '';
  const phone = form.get('phone')?.toString() ?? '';
  const project = form.get('project')?.toString() ?? '';
  const web = form.get('web')?.toString() ?? '';
  const projectType = form.get('projectType')?.toString() ?? '';
  const projectGoal = form.get('projectGoal')?.toString() ?? '';
  const budget = form.get('budget')?.toString() ?? '';
  const projectDetails = form.get('projectDetails')?.toString() ?? '';
  const privacyPolicy = form.get('privacyPolicy')?.toString() ?? '';
  const url = form.get('url')?.toString() ?? '';

  // // Validate the data - you'll probably want to do more than this
  // if (!name || !email || !message || !country || !phone || !subject) {
  //   return new Response(
  //     JSON.stringify({
  //       message: i18n.CONTACT_FORM.ERROR,
  //       status: 400
  //     }),
  //   );
  // }

  const emailHtml: string = renderToString(EmailTemplate({fullName, email, phone, project, web, projectType, projectGoal, budget, projectDetails, privacyPolicy}));

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

  // Send the event to Facebook
  await sendContact({ fullName, email, phone }, url);

  return new Response(
    JSON.stringify({
      message: 'Formulario enviado',
      status: data?.id && dataSelf?.id ? 200 : 400
    }),
  );
};