import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RandomPlanet } from '@components/RandomPlanet';

const renderComponent = () => render(<RandomPlanet />);

describe('RandomPlanet component', () => {
  describe('Component not exist', () => {
    it('randomPlanet check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const randomPlanet = queryByTestId('randomPlanet');

      expect(randomPlanet).not.toBeInTheDocument();
    });
  });
});
