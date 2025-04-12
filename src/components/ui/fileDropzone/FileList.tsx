const normalizeFileName = (name: string) =>
  name.normalize('NFD') // elimina acentos
      .replace(/[\u0300-\u036f]/g, '') // elimina caracteres diacríticos
      .replace(/[^a-zA-Z0-9-_\\.]/g, '_'); // reemplaza los caracteres no seguros por _

interface FileListProps {
  files?: File[];
  setFiles?: (files: File[]) => void;
  hideRemoveButton?: boolean;
}

export default function FileList({ files = [], setFiles, hideRemoveButton }: FileListProps) {
  const handleRemove = (fileToRemove: File) => {
    if (!setFiles) return;
    setFiles(files.filter(file => file.name !== fileToRemove.name));
  };

  return (
    <>
      {
        files.length > 0 && (
          <ul className="mb-4 flex gap-2 flex-wrap">
            {(files as File[]).map((file, index) => (
              <li
                key={`${normalizeFileName(file.name)}-${index}`}
                className="rounded-lg relative border-2 border-gray-300 bg-white/5 p-1 flex flex-col items-center justify-center gap-2"
              >
                {
                  file.type.startsWith('image/') && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )
                }
                {
                  // Si es un pdf mostrar un object
                  file.type === 'application/pdf' && (
                    <object data={URL.createObjectURL(file)} type="application/pdf" className="w-16 h-16 object-cover rounded">
                      <p>PDF</p>
                    </object>
                  )
                }
                {
                  // Si es un video mostrar un video
                  file.type.startsWith('video/') && (
                    <video
                      src={URL.createObjectURL(file)}
                      className="w-16 h-16 object-cover rounded"
                      controls
                    />
                  )
                }
                {
                  !hideRemoveButton && (
                    <button onClick={() => handleRemove(file)} className="absolute -right-2 -top-2 w-4 h-4 flex text-xs justify-center items-center rounded-full bg-red-400 text-white">x</button>
                  )
                }
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}