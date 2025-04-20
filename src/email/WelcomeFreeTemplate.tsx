import React from 'react';

interface EmailComponentProps {
  fullname: string;
}

const EmailComponent = ({ fullname }: EmailComponentProps) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <title>¡Gracias por compartir tu proyecto! 🌟</title>
      </head>
      <body
        style={{
          backgroundColor: 'rgb(2,6,23)',
          margin: 'auto',
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          padding: '0 0.5rem',
        }}
      >
        <div
          style={{
            display: 'none',
            overflow: 'hidden',
            lineHeight: '1px',
            opacity: 0,
            maxHeight: 0,
            maxWidth: 0,
          }}
        >
          Ver email online
          <div>
            {/* Invisible zero-width characters for email preview */}
            {'\u200B'.repeat(100)}
          </div>
        </div>

        <table
          align="center"
          width="100%"
          border={0}
          cellPadding="0"
          cellSpacing="0"
          role="presentation"
          style={{
            border: '1px solid rgb(234,234,234)',
            color: 'rgb(255,255,255)',
            borderRadius: '0.25rem',
            margin: '40px auto',
            padding: '20px',
            maxWidth: '465px',
          }}
        >
          <tbody>
            <tr style={{ width: '100%' }}>
              <td>
                <table
                  align="center"
                  width="100%"
                  border={0}
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                  style={{ marginTop: '32px' }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <img
                          alt="Astrahub Logo"
                          height="112"
                          src="https://www.astrahub.dev/logos/logo-white.png"
                          width="100"
                          style={{
                            margin: '0 auto',
                            display: 'block',
                            outline: 'none',
                            border: 'none',
                            textDecoration: 'none',
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1
                  style={{
                    fontSize: '24px',
                    textAlign: 'center',
                    margin: '30px 0',
                    fontWeight: 100,
                  }}
                >
                  ¡Gracias por compartir tu proyecto! 🌟
                </h1>
                <p style={{ fontSize: '1.125rem', lineHeight: '24px', margin: '16px 0' }}>
                  Hola <strong>{fullname}</strong>,
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '24px',
                    fontWeight: 100,
                    margin: '16px 0',
                  }}
                >
                  Hemos recibido correctamente tu formulario y nos encantará conocer
                  más sobre tu proyecto. En los próximos días revisaremos todas las
                  candidaturas con calma.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: '24px', margin: '16px 0' }}>
                  ✨ Recuerda que puedes aumentar tus posibilidades de ser
                  seleccionado comentando en los post de instagram y/o facebook
                  explicando por qué deberías ser la persona seleccionada.
                </p>
                <div>
                  <table
                    align="center"
                    width="100%"
                    border={0}
                    cellPadding="0"
                    cellSpacing="0"
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            width="100%"
                            border={0}
                            cellPadding="0"
                            cellSpacing="0"
                            role="presentation"
                            style={{ marginTop: '16px' }}
                          >
                            <tbody style={{ width: '100%' }}>
                              <tr style={{ width: '100%' }}>
                                <td
                                  align="center"
                                  style={{ width: '50%', paddingRight: '8px' }}
                                >
                                  <a
                                    className="hover:bg-pink-500"
                                    href="https://instagram.com/astrahub.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.5rem',
                                      padding: '8px 16px',
                                      backgroundColor: 'rgb(219,39,119)',
                                      borderRadius: '9999px',
                                      color: 'rgb(255,255,255)',
                                      textDecoration: 'none',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    Comentar en Instagram
                                  </a>
                                </td>
                                <td
                                  align="center"
                                  style={{ width: '50%', paddingLeft: '8px' }}
                                >
                                  <a
                                    className="hover:bg-blue-500"
                                    href="https://www.facebook.com/astrahub.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.5rem',
                                      padding: '8px 16px',
                                      backgroundColor: 'rgb(37,99,235)',
                                      borderRadius: '9999px',
                                      color: 'rgb(255,255,255)',
                                      textDecoration: 'none',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    Comentar en Facebook
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '24px',
                    fontWeight: 300,
                    margin: '2rem 0 16px',
                  }}
                >
                  Te recuerdo que la 🗓️ Fecha límite de participación es hasta.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    fontWeight: 300,
                    margin: '16px 0',
                  }}
                >
                  <strong style={{ color: 'rgb(187,63,255)' }}>
                    28 de abril a las 23:59
                  </strong>
                </p>

                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '24px',
                    fontWeight: 300,
                    margin: '2rem 0 16px',
                  }}
                >
                  El 📣 Anuncio del proyecto elegido.
                </p>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    fontWeight: 300,
                    margin: '16px 0',
                  }}
                >
                  <strong style={{ color: 'rgb(132,202,231)' }}>
                    30 de abril, a través de las redes sociales
                  </strong>
                </p>

                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '24px',
                    fontWeight: 100,
                    margin: '2rem 0 16px',
                  }}
                >
                  Mientras tanto, si quieres seguir el proceso o inspirarte con
                  ideas para tu web, puedes seguir nuestras redes sociales:
                </p>

                <div>
                  <table
                    align="center"
                    width="100%"
                    border={0}
                    cellPadding="0"
                    cellSpacing="0"
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            width="100%"
                            border={0}
                            cellPadding="0"
                            cellSpacing="0"
                            role="presentation"
                            style={{ marginTop: '16px' }}
                          >
                            <tbody style={{ width: '100%' }}>
                              <tr style={{ width: '100%' }}>
                                <td
                                  align="center"
                                  style={{ width: '50%', paddingRight: '8px' }}
                                >
                                  <a
                                    className="hover:bg-pink-500"
                                    href="https://instagram.com/astrahub.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '0.5rem',
                                      padding: '8px 16px',
                                      backgroundColor: 'rgb(219,39,119)',
                                      borderRadius: '9999px',
                                      color: 'rgb(255,255,255)',
                                      textDecoration: 'none',
                                    }}
                                  >
                                    Seguir en Instagram
                                  </a>
                                </td>
                                <td
                                  align="center"
                                  style={{ width: '50%', paddingLeft: '8px' }}
                                >
                                  <a
                                    className="hover:bg-blue-500"
                                    href="https://www.facebook.com/astrahub.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.5rem',
                                      padding: '8px 16px',
                                      backgroundColor: 'rgb(37,99,235)',
                                      borderRadius: '9999px',
                                      color: 'rgb(255,255,255)',
                                      textDecoration: 'none',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    Seguir en Facebook
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    fontWeight: 100,
                    margin: '16px 0',
                  }}
                >
                  Gracias de nuevo por compartir tu historia.
                </p>
                <hr
                  style={{
                    border: 'none',
                    borderTop: '1px solid #eaeaea',
                    margin: '26px 0',
                  }}
                />

                <p
                  style={{
                    color: 'rgb(229,231,235)',
                    fontSize: '12px',
                    lineHeight: '24px',
                    margin: '16px 0',
                  }}
                >
                  Este email se ha enviado porque te has inscrito en la convocatoria
                  de diseño web gratuito de AstraWeb a través del formulario de
                  participación.
                </p>
                <p
                  style={{
                    color: 'rgb(229,231,235)',
                    fontSize: '12px',
                    lineHeight: '24px',
                    margin: '16px 0',
                  }}
                >
                  Si deseas modificar o eliminar tus datos, puedes contactarme en
                  cualquier momento respondiendo a este correo o escribiendo a
                  info@astrahub.es
                </p>
                <p
                  style={{
                    color: 'rgb(229,231,235)',
                    fontSize: '12px',
                    lineHeight: '24px',
                    margin: '16px 0',
                  }}
                >
                  Si deseas modificar o eliminar tus datos, puedes contactarnos en
                  cualquier momento respondiendo a este correo o escribiendo a
                  info@astrahub.es
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
};

export default EmailComponent;
