import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function PhotoWidgetDropzone({ setFiles }) {
  const dropzoneStyles = {
    marginTop: "8px",
    width: "150px",
    height: "150px",
    border: "dashed 3px #4b9301",
    borderRadius: "5%",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const dropzoneActive = {
    border: "dashed 3px green",
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <h4>1. Качи файл</h4>
      <div
        {...getRootProps()}
        style={
          isDragActive
            ? { ...dropzoneStyles, ...dropzoneActive }
            : dropzoneStyles
        }
      >
        <input {...getInputProps()} />
        <div name="upload" size="huge">
          <img
            src="/icons/uploadFile.svg"
            alt="upload icon"
            style={{ width: " 50px", height: "50px", marginBottom: "16px" }}
          />
        </div>
        <div content="Drop image here" style={{ textAlign: "center" }}>
          Дропни файл тук или кликни за ъплоад прoзорец
        </div>
      </div>
    </>
  );
}
