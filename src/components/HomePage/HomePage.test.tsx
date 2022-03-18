import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HomePage } from '@components/HomePage';

const renderComponent = () => render(<HomePage />);

describe('HomePage component', () => {
  describe('Component exist', () => {
    it('homePage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const homePage = queryByTestId('homePage');

      expect(homePage).toBeInTheDocument();
    });
  });
});
