import { Fragment, useLayoutEffect } from 'react';
import PageHeader from '../components/header/PageHeader';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const Wrapper = styled.div``;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // const token = localStorage.getItem('token')
  // if (!token) return <Navigate to={'/'} />;

  return <Wrapper>{children}</Wrapper>;
};

export default PrivateRoute;
