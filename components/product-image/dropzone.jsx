import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function PhotoWidgetDropzone({ setFiles }) {
  const dropzoneStyles = {
    border: "dashed 3px #eee",
    borderRadius: "5%",
    paddingTop: "30px",
    textAlign: "center",
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
    <div
      {...getRootProps()}
      style={
        isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
      }
    >
      <input {...getInputProps()} />
      <div name="upload" size="huge">
        Icon
      </div>
      <div content="Drop image here">Drop image here</div>
    </div>
  );
}
