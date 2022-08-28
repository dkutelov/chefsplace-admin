import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  FormGroup,
  FormContainer,
  SectionContainer,
  FormRow,
} from "./product-form.styles";
import ImageUpload from "../product-image/image-upload";

export const ProductForm = ({ categories = [] }) => {
  console.log(categories);
  const [productPhotoUrls, setProductPhotoUrls] = useState([]);
  return (
    <FormContainer>
      <SectionContainer>
        <Formik
          initialValues={{
            name: "",
            price: 0,
            reducedPrice: 0,
            shortDescription: "",
            category: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.name = "Задължително поле!";
            }
            if (!values.price) {
              errors.price = "Задължително поле!";
            }
            if (values.price <= 0) {
              errors.price = "Цената трябва да е по-голяма от нула!";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <label htmlFor="productName">Име на продукта</label>
                <Field id="productName" type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </FormGroup>
              <FormRow>
                <FormGroup style={{ flexBasis: "45%" }}>
                  <label htmlFor="productPrice">Цена</label>
                  <Field id="productPrice" type="number" name="price" />
                  <ErrorMessage name="price" component="div" />
                </FormGroup>
                <FormGroup style={{ flexBasis: "45%" }}>
                  <label htmlFor="productPromoPrice">Промоционална Цена</label>
                  <Field
                    id="productPromoPrice"
                    type="number"
                    name="reducedPrice"
                  />
                  <ErrorMessage name="reducedPrice" component="div" />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <label htmlFor="shortDescription">Кратко описание</label>
                <Field
                  id="shortDescription"
                  as="textarea"
                  name="shortDescription"
                  rows="5"
                />
                <ErrorMessage name="shortDescription" component="div" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="shortDescription">Категория</label>
                <Field as="select" name="category">
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </SectionContainer>
      <SectionContainer>
        <ImageUpload />
      </SectionContainer>
    </FormContainer>
  );
};
