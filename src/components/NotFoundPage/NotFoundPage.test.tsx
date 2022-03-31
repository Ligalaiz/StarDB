import { NotFoundPage } from '@components/NotFoundPage';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<NotFoundPage />);

describe('NotFoundPage component', () => {
  describe('Component not exist', () => {
    it('notFoundPage check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const notFoundPage = queryByTestId('notFoundPage');

      expect(notFoundPage).not.toBeInTheDocument();
    });
  });
});
