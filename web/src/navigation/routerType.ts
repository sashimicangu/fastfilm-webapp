import React from 'react';
import { ROUTER_PATH } from '../config/index';
import AccountPage from '../pages/app/AccountPage';
import BrowseFilmPage from '../pages/app/BrowseFilmPage';
import CollectionPage from '../pages/app/CollectionPage';
import HomePage from '../pages/app/HomePage';
import MovieDetailPage from '../pages/app/MovieDetailPage';
import NewFilmPage from '../pages/app/NewFilmPage';
import SearchPage from '../pages/app/SearchPage';
import TopFilmPage from '../pages/app/TopFilmPage';

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
  {
    path: ROUTER_PATH.HOT_FILM,
    component: TopFilmPage,
  },
  {
    path: ROUTER_PATH.NEW,
    component: NewFilmPage,
  },
  { path: ROUTER_PATH.BROWSE, component: BrowseFilmPage },
  { path: ROUTER_PATH.ACCOUNT, component: AccountPage },
  { path: ROUTER_PATH.COLLECTION, component: CollectionPage },
  { path: ROUTER_PATH.MOVIE_DETAIL, component: MovieDetailPage },
];

export { appRoutes };
