import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { StarshipsPage } from '@components/StarshipsPage';

const renderComponent = () => render(<StarshipsPage />);

describe('StarshipsPage component', () => {
  describe('Component exist', () => {
    it('starshipsPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const starshipsPage = queryByTestId('starshipsPage');

      expect(starshipsPage).toBeInTheDocument();
    });
  });
});
