import { createClient } from "@libsql/client/web";

const TURSO_DATABASE_URL = import.meta.env.TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN = import.meta.env.TURSO_AUTH_TOKEN;

export const turso = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

// Crea un nuevo cliente en turso
export const insertNewUser = async (userParams: (string | number)[]) => {
  const result = await turso.execute({
    sql: `
      INSERT INTO users (full_name, email, phone, social_user, project, source, web, project_type, project_details, materials, privacy_policy)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `,
    args: userParams,
  });

  return result;
}
