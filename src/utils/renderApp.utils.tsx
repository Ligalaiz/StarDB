import React from 'react';
import { AppRouter } from '@src/router';
import { App } from '../App';

const renderAppUtils = () => {
  return (
    <App>
      <AppRouter />
    </App>
  );
};

export { renderAppUtils };
