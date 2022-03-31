import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DetailsPage } from '@components/DetailsPage';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Router>
      <Provider store={store}>
        <DetailsPage />
      </Provider>
    </Router>,
  );

describe('DetailsPage component', () => {
  describe('Component exist', () => {
    test('detailsPage that the component has been rendered', () => {
      const { queryByTestId } = renderComponent();
      const detailsPage = queryByTestId('detailsPage');

      expect(detailsPage).toBeInTheDocument();
    });
  });
});
