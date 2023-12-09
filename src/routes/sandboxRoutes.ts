import React from 'react';
import IRoute from './@types';

// Lazy loading
//*  Please consider rethinking before implementing lazy loading
const SandboxPage = React.lazy(() => import('@/ui/pages/Sandbox/index'));

const sandboxRoutes: IRoute[] = [
  {
    path: '/sandbox',
    name: 'Sandbox ',
    component: SandboxPage,
    authenticated: false,
  },
];
export default sandboxRoutes;
