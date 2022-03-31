import React, { FC, ReactNode, useEffect } from 'react';
import { useAction } from '@src/hooks/useAction';
import { useLocation } from 'react-router-dom';
import { get, set } from './utils';

const App: FC<ReactNode> = ({ children }) => {
  const { login, logout } = useAction();
  const location = useLocation();
  set('currentLocation', location);

  useEffect(() => {
    const isLogin = get('login');
    if (isLogin) {
      login();
    } else {
      logout();
    }
  }, [login, logout]);

  return <>{children}</>;
};

export { App };
