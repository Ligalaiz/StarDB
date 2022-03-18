import { Error } from '@components/Error';

export const routes = [
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
