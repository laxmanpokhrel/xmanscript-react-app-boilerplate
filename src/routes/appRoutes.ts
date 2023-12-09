import React from 'react';
import IRoute from './@types';

// Lazy loading
//*  Please consider rethinking before implementing lazy loading
const Home = React.lazy(() => import('@/pages/Home'));
const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home ',
    component: Home,
    authenticated: false,
  },
];
export default appRoutes;
