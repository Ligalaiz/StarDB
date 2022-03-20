import { Error } from '@components/Error';
import { HomePage } from '@components/HomePage';
import { PeoplePage } from '@components/PeoplePage';
import { PlanetsPage } from '@components/PlanetsPage';
import { StarshipsPage } from '@components/StarshipsPage';

export const routes = [
  { path: '/', element: HomePage },
  { path: 'people', element: PeoplePage },
  { path: 'planets', element: PlanetsPage },
  { path: 'starships', element: StarshipsPage },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
