import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LoginPage } from '@components/LoginPage';

const renderComponent = () => render(<LoginPage />);

describe('LoginPage component', () => {
  describe('Component exist', () => {
    it('loginPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const loginPage = queryByTestId('loginPage');

      expect(loginPage).toBeInTheDocument();
    });
  });
});
