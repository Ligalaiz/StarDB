import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PlanetsPage } from '@src/modules/PlanetsPage';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <PlanetsPage />
    </Provider>,
  );

describe('PlanetsPage component', () => {
  describe('Component exist', () => {
    it('planetsPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const planetsPage = queryByTestId('planetsPage');

      expect(planetsPage).toBeInTheDocument();
    });
  });
});
