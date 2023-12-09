import React from 'react';
import IRoute from './@types';

// Lazy loading
//*  Please consider rethinking before implementing lazy loading
const Sandbox = React.lazy(() => import('@/ui/pages/Sandbox/index'));

const sandboxRoutes: IRoute[] = [
  {
    path: '/sandbox',
    name: 'Sandbox ',
    component: Sandbox,
    authenticated: false,
  },
];
export default sandboxRoutes;
