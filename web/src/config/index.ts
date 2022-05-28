export const HEADER_TAB = {
  HOME: { id: 0, name: 'Trang chủ', path: '/' },
  HOT: { id: 1, name: 'Phim Hot', path: '/top' },
  NEW: { id: 2, name: 'Phim mới', path: '/new' },
  VIEW: {id: 3, name: 'Lượt xem nhiều', path: '/view'}
  // BROWSE: { id: 3, name: 'Thể loại', path: '/browse' },
};

export const ROUTER_PATH = {
  HOME: '/',
  SEARCH: '/search',
  HOT_FILM: '/top',
  BROWSE: '/browse',
  NEW: '/new',
  ACCOUNT: '/account',
  COLLECTION: '/collection',
  MOVIE_DETAIL: '/movie/:id',
  VIEW: '/view'
}

export const BASE_URL = 'http://localhost:8080/api/'