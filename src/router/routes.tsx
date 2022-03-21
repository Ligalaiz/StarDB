import { Error } from '@components/Error';
import { HomePage } from '@components/HomePage';
import { PeoplePage } from '@components/PeoplePage';
import { PlanetsPage } from '@components/PlanetsPage';
import { StarshipsPage } from '@components/StarshipsPage';
import { LoginPage } from '@components/LoginPage';
import { SecretPage } from '@components/SecretPage';

export const routes = [
  { path: '/', element: HomePage },
  { path: 'people', element: PeoplePage },
  { path: 'planets', element: PlanetsPage },
  { path: 'starships', element: StarshipsPage },
  { path: 'login', element: LoginPage },
  { path: 'secret', element: SecretPage },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
