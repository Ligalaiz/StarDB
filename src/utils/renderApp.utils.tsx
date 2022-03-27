import React from 'react';
import { AppRouter } from '@src/router';
import { errorBoundary } from '@src/HOC/errorBoundary';
import { App } from '../App';

const AppWithErrorBoundary = errorBoundary(App);

const renderAppUtils = () => {
  return (
    <AppWithErrorBoundary>
      <AppRouter />
    </AppWithErrorBoundary>
  );
};

export { renderAppUtils };
