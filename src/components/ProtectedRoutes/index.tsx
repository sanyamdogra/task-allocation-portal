import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';

const ProtectedRoutes: React.FC = () => {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
