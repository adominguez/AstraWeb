import type { APIRoute } from "astro";
import { sendStartLead } from "@lib/fbEvents";

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const fullName = form.get('fullName')?.toString() ?? '';
  const email = form.get('email')?.toString() ?? '';
  const phone = form.get('phone')?.toString() ?? '';
  const url = form.get('url')?.toString() ?? '';

  // Send the event to Facebook
  const data = await sendStartLead({ fullName, email, phone }, url);

  return new Response(
    JSON.stringify({
      message: 'lead started',
      status: data ? 200 : 400
    }),
  );
};