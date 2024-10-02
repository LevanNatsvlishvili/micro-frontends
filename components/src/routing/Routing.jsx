import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypeS from 'prop-types';
const Layout = lazy(() => import('@/components/Layout'));

const Routing = ({ routes, layout }) => {
  if (layout) {
    const { navItems, viewItems } = layout;
    const layoutRoutes = [
      {
        path: '/',
        element: <Layout navItems={navItems} viewItems={viewItems} />,
        children: routes,
      },
    ];
    const router = createBrowserRouter(layoutRoutes);
    return <RouterProvider router={router} />;
  }

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

Routing.propTypes = {
  routes: PropTypeS.array.isRequired,
  layout: PropTypeS.object,
};
export default Routing;
