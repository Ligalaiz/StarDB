import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { StarshipsPage } from '@components/StarshipsPage';

const renderComponent = () => render(<StarshipsPage />);

describe('StarshipsPage component', () => {
  describe('Component not exist', () => {
    it('starshipsPage check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const starshipsPage = queryByTestId('planetsPage');

      expect(starshipsPage).not.toBeInTheDocument();
    });
  });
});
