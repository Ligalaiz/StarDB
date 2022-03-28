import { Error } from '@components/Error';
import { HomePage } from '@components/HomePage';
import { PeoplePage } from '@modules/PeoplePage';
import { PlanetsPage } from '@modules/PlanetsPage';
import { StarshipsPage } from '@modules/StarshipsPage';
import { LoginPage } from '@components/LoginPage';
import { SecretPage } from '@components/SecretPage';
import { DetailsPage } from '@components/DetailsPage';

export const routes = [
  { path: '/', element: HomePage },
  { path: 'details/:id', element: DetailsPage },
  { path: 'people', element: PeoplePage },
  { path: 'people/:id', element: PeoplePage },
  { path: 'planets', element: PlanetsPage },
  { path: 'planets/:id', element: PlanetsPage },
  { path: 'starships', element: StarshipsPage },
  { path: 'starships/:id', element: StarshipsPage },
  { path: 'login', element: LoginPage },
  { path: 'secret', element: SecretPage },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
