import Twilio from 'twilio'
const twilioAccountId = import.meta.env.TWILIO_ACCOUNT_ID;
const auth = import.meta.env.TWILIO_ACCOUNT_AUTH;
const twilioPhoneNumber = import.meta.env.TWILIO_PHONE_NUMBER;
const twilioWhatsAppNumber = import.meta.env.TWILIO_OWN_NUMBER;

const client = Twilio(twilioAccountId, auth)

interface SendMessageProps {
  message: string;
}

export async function sendMessage({ message } : SendMessageProps) {

  try {
    const msg = await client.messages.create({
      from: twilioPhoneNumber,
      to: twilioWhatsAppNumber,
      body: message,
    })

    return new Response(JSON.stringify({ success: true, sid: msg.sid }), { status: 200 })

  } catch (error) {
    console.error('Error enviando WhatsApp:', error)
    return new Response(JSON.stringify({ success: false, error }), { status: 500 })
  }

}