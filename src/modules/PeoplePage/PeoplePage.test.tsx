import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PeoplePage } from '@src/modules/PeoplePage';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const renderComponent = () =>
  render(
    <Router>
      <Provider store={store}>
        <PeoplePage />
      </Provider>
    </Router>,
  );

describe('PeoplePage component', () => {
  describe('Component exist', () => {
    it('peoplePage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const peoplePage = queryByTestId('peoplePage');

      expect(peoplePage).toBeInTheDocument();
    });
  });
});
