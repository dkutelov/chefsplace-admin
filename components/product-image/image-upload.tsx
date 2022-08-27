import React, { useState } from "react";
import PhotoWidgetDropzone from "./dropzone";
import PhotoWidgetCropper from "./cropper";
import cuid from "cuid";

import { toast } from "react-toastify";

function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf(("." - 1) >>> 0) + 2);
}

export default function ImageUpload({ setEditMode }) {
  const [files, setFiles] = useState([]);
  const [cropper, setCropper] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleUploadImage() {
    setLoading(true);
    const filename = cuid() + "." + getFileExtension(files[0].name);

    cropper.getCroppedCanvas().toBlob(async (image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "chefsplace");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dariku/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      //setImage(file.eager[0].secure_url);
      //handleImageUrl(file.eager[0].secure_url);
      const imageUrl = file.public_id.substring(20) + "." + file.format;
      console.log(imageUrl);
      setLoading(false);
    });
  }

  function handleCancelCrop() {
    setFiles([]);
    setCropper(null);
  }

  return (
    <div>
      <div>
        <h1>Add Photo</h1>
        <PhotoWidgetDropzone setFiles={setFiles} />
      </div>

      <div>
        <p>Resize</p>
        {files.length > 0 && (
          <PhotoWidgetCropper
            setCropper={setCropper}
            imagePreview={files[0].preview}
          />
        )}
      </div>
      <div>
        <p>Preview and upload</p>
        {files.length > 0 && (
          <>
            <div
              className="img-preview"
              style={{ minHeight: 200, minWidth: 200, overflow: "hidden" }}
            />
            <div>
              <button
                loading={loading}
                onClick={handleUploadImage}
                style={{ width: 100 }}
                positive
                icon="check"
              >
                OK
              </button>
              <button
                disabled={loading}
                onClick={handleCancelCrop}
                style={{ width: 100 }}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
