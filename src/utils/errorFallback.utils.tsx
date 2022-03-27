import React from 'react';

const errorFallbackUtils = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}) => {
  console.log('show error');
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export { errorFallbackUtils };
