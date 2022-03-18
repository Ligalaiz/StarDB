import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RandomPlanet } from '@components/RandomPlanet';

const renderComponent = () => render(<RandomPlanet />);

describe('RandomPlanet component', () => {
  describe('Component exist', () => {
    it('randomPlanet check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const randomPlanet = queryByTestId('randomPlanet');
      const randomImage = queryByTestId('randomImage');

      expect(randomPlanet).toBeInTheDocument();
      expect(randomImage).toBeInTheDocument();
    });
  });
});
