import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Card } from '@components/Card';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const mockData = {
  name: 'name',
  gender: 'gender',
  eye_color: 'color',
  id: '1',
  type: 'characters',
};
const isLoadingMock = true;

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Card data={mockData} isLoading={isLoadingMock} />
    </Provider>,
  );

describe('Card component', () => {
  describe('Component exist', () => {
    it('card check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const card = queryByTestId('card');

      expect(card).toBeInTheDocument();
    });
  });
});
