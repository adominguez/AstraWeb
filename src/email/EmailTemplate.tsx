interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  project: string;
  web?: string;
  projectType: string;
  projectGoal: string;
  budget: string;
  projectDetails?: string;
}

export default function EmailTemplate({
  fullName,
  email,
  phone,
  project,
  web,
  projectType,
  projectGoal,
  budget,
  projectDetails,
}: EmailTemplateProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <title>Formulario de contacto - Astrahub</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: '1rem',
          backgroundColor: "#090a0f",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          color: "#ffffff",
        }}
      >
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            border: "1px solid #333",
            borderRadius: "4px",
            backgroundColor: "#000",
          }}
        >
          {/* Cabecera con logotipo */}
          <tbody>
            <tr>
              <td style={{ padding: "20px" }}>
                <img
                  src="https://www.astrahub.dev/favicon-email.png"
                  alt="Astrahub Logo"
                  style={{ display: "block", maxWidth: "100px" }}
                />
              </td>
            </tr>
            {/* Título y mensaje inicial */}
            <tr>
              <td style={{ padding: "0 20px" }}>
                <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>
                  Formulario de contacto
                </h1>
                <p style={{ fontSize: "1rem", margin: "0 0 .5rem 0" }}>
                  Estimado/a <strong>{fullName}</strong>,
                </p>
                <p style={{ fontSize: "1rem", margin: "0 0 .5rem 0" }}>
                  Muchas gracias por ponerte en contacto con nosotros y por tu
                  interés en los servicios de Astrahub. A continuación, te
                  presentamos el resumen de la información que nos has enviado:
                </p>
              </td>
            </tr>
            {/* Sección de datos */}
            <tr>
              <td style={{ padding: "20px", borderTop: "1px solid #333" }}>
                <table width="100%" cellPadding="5" cellSpacing="0">
                  {/* Información personal */}
                  <tbody>
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          color: "#84cae7",
                          fontSize: "1.5rem",
                          paddingBottom: "10px",
                        }}
                      >
                        Información personal:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem", width: "40%" }}>
                        <strong>Nombre:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{fullName}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Correo:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{email}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Teléfono:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{phone}</td>
                    </tr>
                    {/* Detalles del proyecto */}
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          color: "#84cae7",
                          fontSize: "1.5rem",
                          paddingTop: "20px",
                          paddingBottom: "10px",
                        }}
                      >
                        Detalles del proyecto:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Proyecto:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{project}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Tipo:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{projectType}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Objetivo:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{projectGoal}</td>
                    </tr>
                    {web && (
                      <tr>
                        <td style={{ fontSize: "1rem" }}>
                          <strong>Web:</strong>
                        </td>
                        <td style={{ fontSize: "1rem" }}>{web}</td>
                      </tr>
                    )}
                    {/* Presupuesto y detalles */}
                    <tr>
                      <td
                        colSpan={2}
                        style={{
                          color: "#84cae7",
                          fontSize: "1.5rem",
                          paddingTop: "20px",
                          paddingBottom: "10px",
                        }}
                      >
                        Presupuesto y detalles:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "1rem" }}>
                        <strong>Presupuesto:</strong>
                      </td>
                      <td style={{ fontSize: "1rem" }}>{budget}</td>
                    </tr>
                    {projectDetails && (
                      <tr>
                        <td style={{ fontSize: "1rem" }}>
                          <strong>Detalles:</strong>
                        </td>
                        <td style={{ fontSize: "1rem" }}>{projectDetails}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
            {/* Mensaje final */}
            <tr>
              <td style={{ padding: "20px", fontSize: "1.2rem" }}>
                Vamos a estudiar tu proyecto y nos pondremos en contacto contigo
                lo antes posible para discutir los detalles y proporcionarte un
                presupuesto personalizado. Si tienes alguna pregunta adicional,
                no dudes en contactarnos.
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
