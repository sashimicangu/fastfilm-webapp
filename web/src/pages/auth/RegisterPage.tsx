import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import './styles/register.css';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { showToast } from '../../utils/funcUtils';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store';
import moment from 'moment';

const Wrapper = styled.div`
  height: 900px;
  display: flex;
  padding-top: 150px;
  // align-items: center;
  justify-content: center;
  background: black;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const updateUserData = useUserStore((state) => state.updateUserData);

  const onSubmit = async (values: any) => {
    axios
    .post(`${BASE_URL}auth/register`, {
      email: values.email,
      name: values.name,
      password: values.pass,
    })
    .then((res) => {
      if (!!res.data.token) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        updateUserData({
          email: res.data.data.email,
          name: res.data.data.name,
          token: res.data.token,
          isLogin: true,
          createAt: moment()
        });
        showToast('Đăng ký thành công')
        navigate('/');
      }
    });
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
              type="password"
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
