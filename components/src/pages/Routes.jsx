import { paths } from './Paths';
import Dashboard from './Dashboard';

const AppRoutes = [
  {
    path: paths.home,
    element: <Dashboard />,
  },
  {
    path: paths.dashboard,
    element: <h1>Dashboard component</h1>,
  },
  {
    path: paths.login,
    element: <Dashboard />,
  },
];
export default AppRoutes;
