import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { DetailsPage } from '@components/DetailsPage';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>,
  );

describe('DetailsPage component', () => {
  describe('Component not exist', () => {
    test('detailsPage that the component has not been rendered #test', () => {
      const { queryByTestId } = renderComponent();
      const detailsPage = queryByTestId('detailsPage');

      expect(detailsPage).not.toBeInTheDocument();
    });
  });
});
