import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '@pages/Login';

import ProtectedRoutes from '@components/ProtectedRoutes';
import { ROUTES_CONFIG } from '@components/AppRoutes/routesConfig';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          {ROUTES_CONFIG.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
