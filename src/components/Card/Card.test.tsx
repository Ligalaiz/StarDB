import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Card } from '@components/Card';

const renderComponent = () => render(<Card />);

describe('Card component', () => {
  describe('Component exist', () => {
    it('card check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const card = queryByTestId('card');

      expect(card).toBeInTheDocument();
    });
  });
});
