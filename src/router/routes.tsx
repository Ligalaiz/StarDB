import { Error } from '@components/Error';
import { HomePage } from '@components/HomePage';

export const routes = [
  { path: '/', element: HomePage },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
