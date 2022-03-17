import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '@components/Header';

const renderComponent = () =>
  render(
    <Router>
      <Header />
    </Router>,
  );

describe('Header component', () => {
  describe('Component exist', () => {
    it('header check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const header = queryByTestId('header');
      const btn = queryByTestId('changeService');

      expect(header).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });
});
