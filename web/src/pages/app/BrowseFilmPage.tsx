import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { BASE_URL } from '../../config';

function BrowseFilmPage() {
  const onSubmit = (values: any) => {
    const {
      name,
      subtitle,
      release,
      author,
      region,
      type,
      premiere,
      image,
      cover,
      description,
      trailer,
    } = values;

    console.log(values.name)

    axios
      .post(`${BASE_URL}movie/insert`, {
        name,
        subtitle,
        release,
        author,
        region,
        type,
        premiere,
        image,
        cover,
        description,
        trailer,
      })
      .then((res) => {
        console.log('abc')
      });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        subtitle: '',
        release: '',
        author: '',
        region: '',
        type: '',
        premiere: '',
        image: '',
        cover: '',
        description: '',
        trailer: '',
      }}
      onSubmit={onSubmit}
    >
      <Form className="login-form">
        <Field id="name" name="name" placeholder="Nhập ten" />
        <Field id="subtitle" name="subtitle" placeholder="Nhập tieu de" />
        <Field id="release" name="release" placeholder="Nhập nam khoi chieu" />
        <Field id="author" name="author" placeholder="Nhập tac gia" />
        <Field id="region" name="region" placeholder="Nhập quoc gia" />
        <Field id="type" name="type" placeholder="Nhập the loai" />
        <Field id="image" name="image" placeholder="Nhập link anh" />
        <Field id="cover" name="cover" placeholder="Nhập link anh bia" />
        <Field id="description" name="description" placeholder="Nhập mo ta" />
        <Field id="trailer" name="trailer" placeholder="Nhập link trailer" />

        <button
          onClick={onSubmit}
          className="login-form__submit-button"
          type="submit"
        >
          Tiếp tục
        </button>
      </Form>
    </Formik>
  );
}

export default BrowseFilmPage;
