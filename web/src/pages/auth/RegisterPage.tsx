import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import './styles/register.css';

const Wrapper = styled.div`
  height: 900px;
  display: flex;
  padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

const RegisterPage = () => {
  const onSubmit = async (values: any) => {
    console.log(JSON.stringify(values))
  };

  return (
    <Wrapper>
      <div className="register-form__wrapper">
        <h2 className="register-form__title">Đăng ký</h2>
        <h3 className="register-form__subtitle">
          Sử dụng Email của bạn để thực hiện chức năng đăng ký
        </h3>
        <Formik
          initialValues={{ email: '', name: '', pass: '' }}
          onSubmit={onSubmit}
        >
          <Form className="register-form">
            <Field
              id="email"
              name="email"
              placeholder="Nhập Email"
              className={'register-form__input'}
            />
            <Field
              id="name"
              name="name"
              placeholder="Nhập tên"
              className={'register-form__input'}
            />
            <Field
              id="pass"
              name="pass"
              placeholder="Nhập mật khẩu"
              className={'register-form__input'}
            />
            <button className="register-form__submit-button" type="submit">
              Tiếp tục
            </button>
          </Form>
        </Formik>

        <h3 className="register-form__policy">
          Bằng việc đăng ký, quý khách đã đồng ý thực hiện mọi giao dịch theo
          Điều khoản sử dụng và Chính sách bảo mật của FSTFILM
        </h3>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
