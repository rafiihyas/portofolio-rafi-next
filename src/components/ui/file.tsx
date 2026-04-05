"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  CloudUpload,
  File,
  Trash2,
  Image,
  PlusCircle,
} from "lucide-react";
import { Button } from "./button";

interface UploadFile {
  file: File;
  name: string;
  progress: number;
  done: boolean;
  url: string;
}

type LayoutVariant = "horizontal" | "vertical";

type UploadType = "document" | "image" | "any";

interface FileUploadProps {
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  error?: string;
  name?: string;
  id?: string;

  variant?: LayoutVariant;
  uploadType?: UploadType;
  maxSize?: string;
  buttonText?: string;
  title?: string;
  description?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onChange,
  accept = "",
  multiple = false,
  required = false,
  error,
  name = "file_upload",
  id = "file-upload",
  variant = "horizontal",
  uploadType = "document",
  maxSize = "30MB",
  buttonText,
  title,
  description,
  className = "",
  isDisabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hover, setHover] = useState(false);
  const [uploads, setUploads] = useState<UploadFile[]>([]);

  const getUploadConfig = () => {
    switch (uploadType) {
      case "image":
        return {
          icon: Image,
          defaultButtonText: "Unggah",
          defaultTitle: "Unggah",
          defaultDescription: `Format: JPG, PNG, GIF. Maksimal ${maxSize}`,
          defaultAccept: "image/*",
        };
      case "document":
        return {
          icon: CloudUpload,
          defaultButtonText: "Pilih File",
          defaultTitle: "Pilih berkas untuk di unggah",
          defaultDescription: `Maksimal file ${maxSize}`,
          defaultAccept: ".pdf,.doc,.docx,.xls,.xlsx",
        };
      default:
        return {
          icon: CloudUpload,
          defaultButtonText: "Pilih File",
          defaultDescription: `Maksimal file ${maxSize}`,
          defaultAccept: "",
        };
    }
  };

  const config = getUploadConfig();
  const IconComponent = config.icon;
  const finalButtonText = buttonText || config.defaultButtonText;
  const finalTitle = title || config.defaultTitle;
  const finalDescription = description || config.defaultDescription;
  const finalAccept = accept || config.defaultAccept;

  const revokeUrls = (files: UploadFile[]) => {
    files.forEach((f) => URL.revokeObjectURL(f.url));
  };

  useEffect(() => {
    return () => {
      revokeUrls(uploads);
    };
  }, [uploads]);

  const simulateUpload = (files: FileList) => {
    revokeUrls(uploads);

    const fileArray = Array.from(files);
    const newUploads = fileArray.map((file) => ({
      file,
      name: file.name,
      progress: 0,
      done: false,
      url: URL.createObjectURL(file),
    }));

    setUploads(newUploads);

    fileArray.forEach((_, index) => {
      const interval = setInterval(() => {
        setUploads((prev) => {
          const updated = [...prev];
          const current = updated[index];
          if (!current) {
            clearInterval(interval);
            return prev;
          }
          if (current.progress < 100) {
            current.progress += 10;
          } else {
            current.done = true;
            clearInterval(interval);
          }
          return updated;
        });
      }, 200);
    });
  };

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setHover(false);
      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        simulateUpload(files);
        onChange?.(multiple ? Array.from(files) : [files[0]]);
      }
    },
    [onChange, multiple]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const filesArray = Array.from(event.target.files);
    onChange?.(multiple ? filesArray : [filesArray[0]]);
    simulateUpload(event.target.files);
  };

  const handleRemove = (index: number) => {
    setUploads((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);

      onChange?.([]);

      return updated;
    });
  };

  const getDropzoneContent = () => {
    const baseClasses = "text-gray-500 text-sm";

    switch (variant) {
      case "vertical":
        return (
          <div
            className={`${baseClasses} flex flex-col items-center space-y-4`}
          >
            <div
              className={`p-4 w-16 h-16 flex items-center justify-center ${
                uploadType === "image"
                  ? "rounded-full bg-blue-soft text-blue-1"
                  : "rounded-md bg-page"
              }`}
            >
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="text-center">
              <div className="text-font-1 text-title-3 mb-2">{finalTitle}</div>
              <div className="text-body-2 text-font-3 mb-4">
                {finalDescription}
              </div>
              <Button variant="outline">
                {uploadType === "image" ? (
                  <PlusCircle className="w-4 h-4" />
                ) : (
                  <></>
                )}
                {finalButtonText}
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} flex justify-between items-center`}>
            <div className="flex space-x-3 items-center">
              <div className="bg-page rounded-md p-3 w-12 h-12 flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-font-1 text-title-3">{finalTitle}</span>
                <span className="text-body-2 text-font-3">
                  {finalDescription}
                </span>
              </div>
            </div>
            <Button variant="outline">{finalButtonText}</Button>
          </div>
        );
    }
  };

  return (
    <div className={`w-full flex flex-col space-y-5 ${className}`}>
      <div
        className={`relative w-full border border-dashed rounded-2xl p-4 text-center cursor-pointer transition-colors duration-200 ${
          hover
            ? "border-[#BE0501] bg-[#FFF5F5]"
            : error
            ? "border-red-500 bg-white"
            : "border-line bg-white"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setHover(true);
        }}
        onDragLeave={() => setHover(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept={finalAccept}
          multiple={multiple}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          disabled={isDisabled}
        />

        {getDropzoneContent()}
      </div>

      {uploads.length > 0 && (
        <div className="space-y-2 text-left">
          {uploads.map((file, idx) => (
            <div
              key={idx}
              className="flex bg-page rounded-lg items-center p-3 justify-between"
            >
              <div className="flex space-x-3 items-center">
                {uploadType === "image" ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                ) : (
                  <File className="w-5 h-5 text-blue-500" />
                )}
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-font-1 truncate text-title-4 hover:text-blue-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  {file.name}
                </a>
              </div>
              <div className="flex items-center gap-2">
                {file.done && (
                  <CheckCircle className="text-green-500 w-5 h-5" />
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(idx);
                  }}
                  className="text-red-500 text-title-4 hover:text-red-700 flex items-center gap-1"
                  aria-label={`Hapus file ${file.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                  Hapus
                </button>
              </div>
            </div>
          ))}
          <span className="text-font-3 text-xs mt-1">
            Total ukuran:{" "}
            {uploads.reduce((acc, file) => acc + file.file.size, 0) /
              (1024 * 1024)}{" "}
            MB
          </span>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500 mt-1" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
