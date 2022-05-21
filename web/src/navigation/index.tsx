import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageHeader from '../components/header/PageHeader';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import PrivateRoute from './PrivateRoute';
import { appRoutes } from './routerType';

export default function AppNavigator() {
  const appLayout = () => {
    return appRoutes.map((route, idx) => {
      const Component = route.component as React.ComponentType;

      return (
        <Route
          key={idx}
          path={`${route.path}`}
          element={<PrivateRoute children={<Component />} />}
        />
      );
    });
  };

  return (
    <Fragment>
      <PageHeader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {appLayout()}
      </Routes>
    </Fragment>
  );
}
