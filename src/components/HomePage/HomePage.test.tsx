import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from '@components/HomePage';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Router>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </Router>,
  );

describe('HomePage component', () => {
  describe('Component exist', () => {
    it('homePage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const homePage = queryByTestId('homePage');

      expect(homePage).toBeInTheDocument();
    });
  });
});
