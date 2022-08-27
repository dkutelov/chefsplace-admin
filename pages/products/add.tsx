import React from "react";
import { ProductForm } from "../../components/product-form/product-form.component";
import ImageUpload from "../../components/product-image/image-upload";

function AddProduct() {
  return (
    <div className="container">
      <h2 className="page-title">Добави нов продукт</h2>
      <ProductForm />
      <ImageUpload />
    </div>
  );
}

export default AddProduct;
