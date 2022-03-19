import { Error } from '@components/Error';
import { HomePage } from '@components/HomePage';
import { PeoplePage } from '@components/PeoplePage';

export const routes = [
  { path: '/', element: HomePage },
  { path: 'people', element: PeoplePage },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
