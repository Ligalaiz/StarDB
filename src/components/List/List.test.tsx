import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { List } from '@components/List';
import { Provider } from 'react-redux';
import { store } from '@src/store';

const mockData = [
  {
    name: 'name',
    gender: 'gender',
    eye_color: 'color',
    id: '1',
    type: 'characters',
  },
];

const isLoadingMock = true;

const renderComponent = () =>
  render(
    <Provider store={store}>
      <List data={mockData} isLoading={isLoadingMock} />
    </Provider>,
  );

describe('List component', () => {
  describe('Component exist', () => {
    it('list check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const list = queryByTestId('list');

      expect(list).toBeInTheDocument();
    });
  });
});
