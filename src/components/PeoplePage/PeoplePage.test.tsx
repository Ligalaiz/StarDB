import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PeoplePage } from '@components/PeoplePage';

const renderComponent = () => render(<PeoplePage />);

describe('PeoplePage component', () => {
  describe('Component not exist', () => {
    it('peoplePage check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const peoplePage = queryByTestId('peoplePage');

      expect(peoplePage).not.toBeInTheDocument();
    });
  });
});
