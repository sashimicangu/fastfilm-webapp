import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import './styles/login.css';

const Wrapper = styled.div`
  height: 900px;
  display: flex;
  padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

const LoginPage = () => {
  const onSubmit = () => {};

  return (
    <Wrapper>
      <div className="login-form__wrapper">
        <h2 className="login-form__title">Đăng nhập</h2>
        <h3 className="login-form__subtitle">
          Sử dụng Email của bạn để thực hiện chức năng đăng nhập
        </h3>
        <Formik initialValues={{ email: '', pass: '' }} onSubmit={onSubmit}>
          <Form className="login-form">
            <Field
              id="email"
              name="email"
              placeholder="Nhập Email"
              className={'login-form__input'}
            />

            <Field
              id="pass"
              name="pass"
              placeholder="Nhập mật khẩu"
              className={'login-form__input'}
            />
            <button className="login-form__submit-button" type="submit">
              Tiếp tục
            </button>
          </Form>
        </Formik>

        <h3 className='login-form__policy'>
          Bằng việc đăng nhập, quý khách đã đồng ý thực hiện mọi giao dịch theo
          Điều khoản sử dụng và Chính sách bảo mật của FSTFILM
        </h3>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
