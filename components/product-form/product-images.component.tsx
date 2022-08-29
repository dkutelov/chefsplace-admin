import React from "react";
import Image from "next/image";

export const ProductImages = ({ urls }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "16px" }}>
      {urls.map((url) => (
        <div key={url} style={{ margin: "4px" }}>
          <Image
            src={`https://res.cloudinary.com/dariku/image/upload/h_500,c_scale,q_auto:eco/v1650001742/chefsplace/products/${url}`}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};
