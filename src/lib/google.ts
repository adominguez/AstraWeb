import path from 'path';
import { google } from 'googleapis';
import fs from 'fs';

const base64 = import.meta.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
const serviceEmailToShareWith = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const decodedCredentials = JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
const CLIENT_FOLDER_ID = import.meta.env.CLIENT_FOLDER_ID;

const auth = new google.auth.GoogleAuth({
  credentials: decodedCredentials,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({ version: 'v3', auth });

export async function createFolder(folderName: string, parentFolderId: string | null = null) {
  const fileMetadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
  };

  if (parentFolderId) {
    fileMetadata.parents = [parentFolderId];
  }

  const folder = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  const folderId = folder.data.id;

  if (folderId) {
    await drive.permissions.create({
      fileId: folderId,
      requestBody: {
        role: 'writer',
        type: 'user',
        emailAddress: serviceEmailToShareWith,
      },
    });
  }

  return folderId;
}

export async function uploadFile(filePath: string, fileName: string, folderId: string, mimeType: string = 'image/jpeg') {
  const fileMetadata = {
    name: fileName,
    parents: [folderId],
  };

  const media = {
    mimeType,
    body: fs.createReadStream(filePath),
  };

  const file = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id, webViewLink',
  });

  return file.data;
}

export async function listClientFolders() {
  const res = await drive.files.list({
    q: `mimeType = 'application/vnd.google-apps.folder' and '${CLIENT_FOLDER_ID}' in parents and trashed = false`,
    fields: 'files(id, name)',
    pageSize: 100,
  });
  return res.data.files || [];
}

export async function getAllFolders() {
  const res = await drive.files.list({
    q: "mimeType = 'application/vnd.google-apps.folder' and trashed = false",
    fields: 'files(id, name)',
    pageSize: 100,
  });

  return res.data.files || [];
}

export async function deleteFolder(fileId, name) {
  try {
    const res = await drive.files.list({
      q: `name='${name}' and mimeType='application/vnd.google-apps.folder'`,
      fields: 'files(id)',
    });

    const folderId = res.data.files[0]?.id;

    if (folderId) {
      await drive.files.delete({ fileId: folderId });
    }
  } catch (error) {
    throw new Error(`Error deleting folder: ${error}`); 
  }
}

// Elimina todo lo que esté en la papelera
export async function emptyTrash() {
  await drive.files.emptyTrash()
};

export async function createTextSummaryFile(folderId: string, fileName: string, content: string) {
  const tempPath = path.join('/tmp', fileName);
  fs.writeFileSync(tempPath, content);
  const uploaded = await uploadFile(tempPath, fileName, folderId, 'text/plain');
  fs.unlinkSync(tempPath);
  return uploaded;
}
