// components/FileUpload.tsx
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="dropzone border-2 border-dashed p-4 my-4"
    >
      <input {...getInputProps()} />
      <p>Перетащите сюда файлы CSV или XLSX или нажмите сюда и выберите</p>
    </div>
  );
};

export default FileUpload;
