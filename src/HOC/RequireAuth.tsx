import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useLocation, Navigate } from 'react-router-dom';
import { get } from '@src/utils';
import React from 'react';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLogin } = useTypedUseSelector((state) => state.auth);
  const location = useLocation();
  const isLoginLocal = get('login');

  return !isLogin && !isLoginLocal ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    children
  );
};

export { RequireAuth };
