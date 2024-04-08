// components/FileUpload.tsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const acceptedFileTypes = [".xlsx", ".xls", ".csv"];

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xls",
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className={`dropzone border-2 border-dashed p-4 my-4 ${
        isDragActive ? "bg-gray-100" : ""
      }`}
    >
      <input {...getInputProps()} />
      <p>Перетащите сюда файлы CSV или XLSX или нажмите сюда и выберите</p>
    </div>
  );
};

export default FileUpload;
