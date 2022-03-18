import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PeoplePage } from '@components/PeoplePage';

const renderComponent = () => render(<PeoplePage />);

describe('PeoplePage component', () => {
  describe('Component exist', () => {
    it('peoplePage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const peoplePage = queryByTestId('peoplePage');

      expect(peoplePage).toBeInTheDocument();
    });
  });
});
