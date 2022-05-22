import { Fragment, useLayoutEffect } from 'react';
// import Cookie from 'js-cookie';
import PageHeader from '../components/header/PageHeader';
import styled from 'styled-components';

interface PrivateRouteProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  // background: black;
  // height: 100vh;
  // width: 100%;
  // padding: 0 200px;
`;

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // const auth = isAuth()
  // if (!auth) return <Navigate to={'/'} />;

  return <Wrapper>{children}</Wrapper>;
};

export default PrivateRoute;
