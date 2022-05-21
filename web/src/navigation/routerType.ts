import React from 'react';
import { ROUTER_PATH } from '../config/index';
import HomePage from '../pages/app/HomePage';
import SearchPage from '../pages/app/SearchPage';

interface RouteProps {
  path: string;
  component: React.ReactElement | React.FC;
}

const appRoutes: Array<RouteProps> = [
  {
    path: ROUTER_PATH.HOME,
    component: HomePage,
  },
  {
    path: ROUTER_PATH.SEARCH,
    component: SearchPage,
  },
];

export { appRoutes };
