import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SecretPage } from '@components/SecretPage';

const renderComponent = () => render(<SecretPage />);

describe('SecretPage component', () => {
  describe('Component exist', () => {
    it('secretPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const secretPage = queryByTestId('secretPage');

      expect(secretPage).toBeInTheDocument();
    });
  });
});
