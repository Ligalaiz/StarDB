import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { set } from './utils';

const App: FC<ReactNode> = ({ children }) => {
  const location = useLocation();
  set('currentLocation', location);

  return <>{children}</>;
};

export { App };
