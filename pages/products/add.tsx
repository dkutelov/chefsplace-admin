import React from "react";
import { useQuery } from "react-query";

import { ProductForm } from "../../components/product-form/product-form.component";

function AddProduct() {
  const { isLoading, isError, isSuccess, data } = useQuery("categories", () =>
    fetch("http://localhost:8000/api/v1/categories").then((res) => res.json())
  );

  return (
    <div className="container">
      <h2 className="page-title">Добави нов продукт</h2>
      <ProductForm categories={data} />
    </div>
  );
}

export default AddProduct;
