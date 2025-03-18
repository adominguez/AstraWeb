const fbDomain = import.meta.env.FACEBOOK_API_URL;
const token = import.meta.env.FACEBOOK_TOKEN;
const pixelId = import.meta.env.FACEBOOK_PIXEl_ID;
const version = import.meta.env.FACEBOOK_API_VERSION;

const apiUrl = `${fbDomain}/${version}/${pixelId}/events?access_token=${token}`;

export const senEvent = async (event: string, data: any) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: event,
      event_time: Date.now(),
      user_data: data,
    }),
  });
  if (!res.ok) throw new Error('Failed to send event');
  return res.json();
}

export const sendPageView = async () => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: 'PageView',
      event_time: Date.now(),
    }),
  });
  if (!res.ok) throw new Error('Failed to send event');
  return res.json();
}

export const sendLead = async (data: any) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: 'Lead',
      event_time: Date.now(),
      user_data: data,
    }),
  });
  if (!res.ok) throw new Error('Failed to send event');
  return res.json();
}

// send Contact from form
export const sendContact = async (data: any) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: 'Contact',
      event_time: Date.now(),
      user_data: data,
    }),
  });
  if (!res.ok) throw new Error('Failed to send event');
  return res.json();
}