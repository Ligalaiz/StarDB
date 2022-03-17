import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '@components/Header';

const renderComponent = () => render(<Header />);

describe('Header component', () => {
  describe('Component not exist', () => {
    it('header check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const header = queryByTestId('header');

      expect(header).not.toBeInTheDocument();
    });
  });
});
