import { errorFallbackUtils } from '@utils/errorFallback.utils';
import { withErrorBoundary } from 'react-error-boundary';
import React, { ComponentType, ReactNode } from 'react';

const errorBoundary = <P extends ReactNode>(Component: ComponentType<P>) =>
  withErrorBoundary(Component, {
    FallbackComponent: errorFallbackUtils,
    onError(error) {
      console.log('show error');
      console.log({ error });
    },
  });

export { errorBoundary };
