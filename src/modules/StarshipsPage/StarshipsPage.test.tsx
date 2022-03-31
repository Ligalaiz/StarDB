import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StarshipsPage } from '@src/modules/StarshipsPage';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Router>
      <Provider store={store}>
        <StarshipsPage />
      </Provider>
    </Router>,
  );

describe('StarshipsPage component', () => {
  describe('Component exist', () => {
    it('starshipsPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const starshipsPage = queryByTestId('starshipsPage');

      expect(starshipsPage).toBeInTheDocument();
    });
  });
});
