import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PlanetsPage } from '@components/PlanetsPage';

const renderComponent = () => render(<PlanetsPage />);

describe('PlanetsPage component', () => {
  describe('Component not exist', () => {
    it('planetsPage check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const planetsPage = queryByTestId('planetsPage');

      expect(planetsPage).not.toBeInTheDocument();
    });
  });
});
