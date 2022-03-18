import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { List } from '@components/List';

const renderComponent = () => render(<List />);

describe('List component', () => {
  describe('Component exist', () => {
    it('list check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const list = queryByTestId('list');

      expect(list).toBeInTheDocument();
    });
  });
});
