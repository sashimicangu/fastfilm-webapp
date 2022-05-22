import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Search } from 'react-feather';
import styled from 'styled-components';

import './styles/search.css'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  // padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

function SearchPage() {
  const onSubmit = () => {};

  return (
    <Wrapper>
      <Formik initialValues={{ search: '' }} onSubmit={onSubmit}>
        <Form className="search-form">
          <Field
            id="email"
            name="email"
            placeholder="Tìm kiếm"
            className={'search-form__input'}
          />
          <Search
            // onClick={() => {
            //   setTabSelected(undefined);
            //   navigate('/search');
            // }}
            style={{ cursor: 'pointer', marginRight: 20 }}
            color="white"
            width={25}
            height={25}
          />
        </Form>
      </Formik>
    </Wrapper>
  );
}

export default SearchPage;
