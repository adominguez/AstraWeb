// @ts-nocheck
import { useState, useEffect } from 'preact/hooks';
import FileList from './FileList';

interface FileDropzoneProps {
  onFilesChange?: (files: File[]) => void;
  acceptedFileTypes?: string[];
  errorMessages?: {
    validFiles: string;
    maxFiles: string;
  }
  placeholder?: string;
  maxFiles?: number;
  initialFiles?: File[];
}

const FileDropzone = ({ onFilesChange, initialFiles, acceptedFileTypes, placeholder = 'Drag and drop your files here', errorMessages = { validFiles : '', maxFiles: ''}, maxFiles = 1 } : FileDropzoneProps) => {
  const DEFAULT_ERROR_MESSAGES = {
    validFiles: 'No files of the correct type were dropped',
    maxFiles: `You cannot upload more than ${maxFiles} files`,
  } as const;
  
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const getFiles = (uploadFiles: File[]) => {
    setError('');
    const newFiles = uploadFiles.filter((file: File) => (acceptedFileTypes || []).includes(file.type));
    if (newFiles.length === 0) {
      setError(errorMessages.validFiles ?? DEFAULT_ERROR_MESSAGES.validFiles);
    }

    const totalFiles = [...files, ...newFiles.filter((file: File) => !files.some((f) => f.name === file.name))];
    if (totalFiles.length > maxFiles) {
      setError(errorMessages.maxFiles ?? DEFAULT_ERROR_MESSAGES.maxFiles);
    }
    return totalFiles.slice(0, maxFiles);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = getFiles(Array.from(event.dataTransfer.files));
    setFiles(droppedFiles);
    setIsDragging(false);
  };

  const handleDragOver = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleFileSelect = (event: Event) => {
    const selectedFiles = getFiles(Array.from((event.target as HTMLInputElement).files ?? []));
    setFiles(selectedFiles);
  };

  useEffect(() => {
    if (onFilesChange) {
      onFilesChange(files);
    }
  }, [files]);

  useEffect(() => {
    if (initialFiles) {
      setFiles(initialFiles);
    }
  }, []);

  return (
    <>
      <div
        className={`border-2 border-dashed border-gray-300 rounded-3xl p-4 text-center bg-transparent hover:border-secondary hover:bg-white/5 cursor-pointer transition-colors duration-300 ease-in-out relative flex flex-col items-center justify-center gap-4 mb-4 ${isDragging ? 'bg-white/5' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p className="opacity-50">{placeholder}</p>
        <input
          type="file"
          accept={acceptedFileTypes?.join(',')}
          onChange={handleFileSelect}
          multiple={maxFiles > 1}
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
        />
        {error && <small className="text-red-500">{error}</small>}
      </div>
      <FileList files={files} setFiles={setFiles} />
    </>
  );
};

export default FileDropzone;
