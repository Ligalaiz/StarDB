import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { StarshipsPage } from '@src/modules/StarshipsPage';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <StarshipsPage />
    </Provider>,
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
