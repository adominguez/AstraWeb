import sha256 from 'crypto-js/sha256';

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

export const sendLead = async (data: any, url:string) => {

  const payload = {
    data: [
      {
        event_name: 'Lead',
        // Usamos Math.floor para convertir a segundos
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          em: sha256(data.email).toString(),
          ph: sha256(data.phone).toString(),
          fn: sha256(data.fullName).toString(),
        },
        // Opcional: URL de la página donde ocurrió la acción
        event_source_url: url,
      }
    ],
    // test_event_code: 'TEST9526',
  };

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send event');
  return res.json();
}

// send Contact from form
export const sendContact = async (data: any, url:string) => {

  const payload = {
    data: [
      {
        event_name: 'Contact',
        // Usamos Math.floor para convertir a segundos
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          em: sha256(data.email).toString(),
          ph: sha256(data.phone).toString(),
          fn: sha256(data.fullName).toString(),
        },
        // Opcional: URL de la página donde ocurrió la acción
        event_source_url: url,
      }
    ],
    // test_event_code: 'TEST9526',
  };


  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const response = await res.json();
  if (!res.ok) throw new Error('Failed to send event');
  return response;
}

// Custom event abandoned Lead
export const sendStartLead = async (data: any, url:string) => {
  
    const payload = {
      data: [
        {
          event_name: 'AddToCart',
          // Usamos Math.floor para convertir a segundos
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: sha256(data.email).toString(),
            ph: sha256(data.phone).toString(),
            fn: sha256(data.fullName).toString(),
          },
          // Opcional: URL de la página donde ocurrió la acción
          event_source_url: url,
        }
      ],
      // test_event_code: 'TEST9526',
    };
  
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    // if (!res.ok) throw new Error('Failed to send event');
    const result = await res.json();
    return result;
  }