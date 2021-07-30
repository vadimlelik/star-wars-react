import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage/PersonPage';
import FavoritePage from '@containers/FavoritePage'
import SearchPage from '@containers/SearchPage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/people',
    exact: true,
    component: PeoplePage
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoritePage
  },
  {
    path: '/search',
    exact: true,
    component: SearchPage
  },
  {
    path: '/people/:id',
    exact: true,
    component: PersonPage
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFoundPage
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage
  },

];

export default routesConfig;
