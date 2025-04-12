import type { APIRoute } from "astro";
import { listClientFolders, deleteFolder, emptyTrash } from "@lib/google";

export const GET: APIRoute = async () => {
  const folders = await listClientFolders();

  if (folders.length === 0) {
    return new Response(
      JSON.stringify({
        message: 'No se encontraron carpetas',
        status: 404
      }),
    );
  }

  for (const folder of folders) {
    await deleteFolder(folder.id, folder.name);
  }

  await emptyTrash();

  const list = await listClientFolders();

  if (list.length === 0) {
    return new Response(
      JSON.stringify({
        message: 'Se han eliminado todas las carpetas correctamente',
        status: 200
      }),
    );
  }

  return new Response(
    JSON.stringify({
      message: 'No se han podido eliminar las carpetas',
      status: 400
    }),
  );
};