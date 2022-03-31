import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LoginPage } from '@components/LoginPage';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  );

describe('LoginPage component', () => {
  describe('Component exist', () => {
    it('loginPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const loginPage = queryByTestId('loginPage');

      expect(loginPage).toBeInTheDocument();
    });
  });
});
