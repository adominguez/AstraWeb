interface EmailTemplateProps {
  fullName: string;
  email: string;
}

export default function EmailTemplate({
  fullName,
  email,
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
          </tbody>
        </table>
      </body>
    </html>
  );
}
