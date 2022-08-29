import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  FormGroup,
  FormContainer,
  SectionContainer,
  FormRow,
  SaveButton,
  TableCell,
} from "./product-form.styles";
import ImageUpload from "../product-image/image-upload";
import { ProductImages } from "./product-images.component";

export const ProductForm = ({ categories = [] }) => {
  const [productPhotoUrls, setProductPhotoUrls] = useState([]);
  return (
    <FormContainer>
      <SectionContainer>
        <Formik
          initialValues={{
            name: "Пилешки пастообразен бульон 1 кг",
            price: 16.95,
            reducedPrice: 0,
            shortDescription:
              "Пилешкият бульон е много повече от бульон за пилешка супа. • Използвайте във всякакви готвени ястия, за да подсилите вкуса и отключите ароматите на основните съставки. • Добавяйте при варене към ориз или паста. • Използвайте като фон за всякакви сосове.",
            category: "0",
            barCode: "123",
            productCode: "68521955",
            weight: 1.2,
            content:
              "Познат в традиционната си роля като основна съставка на зеленчукови и месни супи, пилешкият пастообразен бульон е лесен за разтваряне във вода, а плътният му вкус на пиле допълва перфектно различни основни ястия и гарнитури като подчертава вкуса на месото и обогатява вкуса на зеленчуците. Вместо вода използвайте Бульона за фон или основа за различни сосове, за получаване на по наситен вкус.",
            ingredients:
              "Cол, растителна мазнина (палмова), нишесте (картофено), вкусови подобрители (мононатриев глутамат, динатриев инозинат, динатриев гуанилат), пилешка мазнина (4%), аромати (съдържат яйчени), пилешки (0.7%), куркума, лимонена киселина, цвят амоняк карамел E 150c)), антиоксиданти (екстракт от розмарин).",
            advantages: "- Без оцветители\n- Без консерванти",
            storage: "Трайност 18 месеца",
            energyKj: "1200",
            energyKcal: "300",
            cholesterol: "",
            proteins: "7 г",
            carbohydrates: "15 г",
            sugar: "0.5 г",
            fat: "14 г",
            fibers: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Задължително поле!";
            }
            if (!values.price) {
              errors.price = "Задължително поле!";
            }
            if (values.price <= 0) {
              errors.price = "Цената трябва да е по-голяма от нула!";
            }
            if (!values.barCode) {
              errors.barCode = "Задължително поле!";
            }
            if (!values.productCode) {
              errors.productCode = "Задължително поле!";
            }
            if (!values.weight) {
              errors.weight = "Задължително поле!";
            }
            if (values.category === "0") {
              errors.category = "Задължително поле!";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const productData = getProductData(values, productPhotoUrls);
            console.log(productData);
            fetch("http://localhost:8000/api/v1/products", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ product: productData }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
              <FormRow>
                <FormGroup style={{ flexBasis: "45%" }}>
                  <label htmlFor="barCode">Бар Код</label>
                  <Field id="barCode" type="text" name="barCode" />
                  <ErrorMessage name="barCode" component="div" />
                </FormGroup>
                <FormGroup style={{ flexBasis: "45%" }}>
                  <label htmlFor="productCode">Продуктов код</label>
                  <Field id="productCode" type="text" name="productCode" />
                  <ErrorMessage name="productCode" component="div" />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup style={{ flexBasis: "45%" }}>
                  <label htmlFor="weight">Тегло</label>
                  <Field id="weight" type="text" name="weight" />
                  <ErrorMessage name="weight" component="div" />
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
                <label htmlFor="category">Категория</label>
                <Field id="category" as="select" name="category">
                  <option defaultValue="0">Избери категория</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="content">Описание</label>
                <Field id="content" as="textarea" name="content" rows="5" />
                <ErrorMessage name="content" component="div" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="ingredients">Съставки</label>
                <Field
                  id="ingredients"
                  as="textarea"
                  name="ingredients"
                  rows="5"
                />
                <ErrorMessage name="ingredients" component="div" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="advantages">Предимства</label>
                <Field
                  id="advantages"
                  as="textarea"
                  name="advantages"
                  rows="5"
                />
                <ErrorMessage name="advantages" component="div" />
              </FormGroup>

              <FormGroup>
                <label htmlFor="storage">Съхранение</label>
                <Field id="storage" as="textarea" name="storage" rows="5" />
                <ErrorMessage name="storage" component="div" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="advantages">Хранителни Стойност</label>
                <FormRow>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="energyKj">Енергия kj</label>
                    <Field id="energyKj" type="text" name="energyKj" />
                  </TableCell>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="energyKcal">Енергия kcal</label>
                    <Field id="energyKcal" type="text" name="energyKcal" />
                  </TableCell>
                </FormRow>
                <FormRow>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="cholesterol">Холестерол</label>
                    <Field id="cholesterol" type="text" name="cholesterol" />
                  </TableCell>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="proteins">Белтъчини</label>
                    <Field id="proteins" type="text" name="proteins" />
                  </TableCell>
                </FormRow>
                <FormRow>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="carbohydrates">Въглехидрати</label>
                    <Field
                      id="carbohydrates"
                      type="text"
                      name="carbohydrates"
                    />
                  </TableCell>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="sugar">Захари</label>
                    <Field id="sugar" type="text" name="sugar" />
                  </TableCell>
                </FormRow>
                <FormRow>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="fat">Мазнини</label>
                    <Field id="fat" type="text" name="fat" />
                  </TableCell>
                  <TableCell style={{ flexBasis: "45%" }}>
                    <label htmlFor="fibers">Фибри</label>
                    <Field id="fibers" type="text" name="fibers" />
                  </TableCell>
                </FormRow>
              </FormGroup>

              <SaveButton type="submit" disabled={isSubmitting}>
                Запиши
              </SaveButton>
            </Form>
          )}
        </Formik>
      </SectionContainer>
      <SectionContainer>
        <h4>Продуктови снимки</h4>
        {productPhotoUrls.length > 0 && (
          <ProductImages urls={productPhotoUrls} />
        )}
        <ImageUpload setProductPhotoUrls={setProductPhotoUrls} />
      </SectionContainer>
    </FormContainer>
  );
};

function getProductData(values, productPhotoUrls) {
  const data = {};

  data.name = values.name;
  data.price = values.price * 100;

  if (values.reducedPrice) {
    data.reducedPrice = values.reducedPrice;
  }

  if (productPhotoUrls.length > 0) {
    data.images = [...productPhotoUrls];
  }
  data.shortDescription = values.shortDescription;
  data.category = values.category;
  data.barCode = values.barCode;
  data.productCode = values.productCode;
  data.weight = values.weight;

  data.description = {};

  if (values.content) {
    data.description.content = values.content;
  }
  if (values.ingredients) {
    data.description.ingredients = values.ingredients;
  }
  if (values.advantages) {
    data.description.advantages = values.advantages;
  }
  if (values.storage) {
    data.description.storage = values.storage;
  }

  data.description.nutritionValues = [];
  if (values.energyKj) {
    data.description.nutritionValues.push({
      label: "Енергия kj",
      text: values.energyKj,
    });
  }
  if (values.energyKcal) {
    data.description.nutritionValues.push({
      label: "Енергия kcal",
      text: values.energyKcal,
    });
  }
  if (values.cholesterol) {
    data.description.nutritionValues.push({
      label: "Холестерол",
      text: values.cholesterol,
    });
  }
  if (values.proteins) {
    data.description.nutritionValues.push({
      label: "Белтъчини",
      text: values.proteins,
    });
  }
  if (values.carbohydrates) {
    data.description.nutritionValues.push({
      label: "Въглехидрати",
      text: values.carbohydrates,
    });
  }
  if (values.sugar) {
    data.description.nutritionValues.push({
      label: "Захари",
      text: values.sugar,
    });
  }
  if (values.fat) {
    data.description.nutritionValues.push({
      label: "Мазнини",
      text: values.fat,
    });
  }
  if (values.fibers) {
    data.description.nutritionValues.push({
      label: "Фибри",
      text: values.fibers,
    });
  }

  if (data.description.nutritionValues.length === 0) {
    delete data.description.nutritionValues;
  }

  return data;
}
