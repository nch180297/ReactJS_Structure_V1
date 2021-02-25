import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoadingScreen from 'src/components/LoadingScreen';

import MainLayout from 'src/layouts/MainLayout';

import HomePageView from 'src/views/HomePage';

import { ROUTER_NAME } from 'src/constants';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: ROUTER_NAME.NOT_FOUND,
    component: lazy(() => import('src/views/Errors/NotFoundView'))
  },
  {
    path: ROUTER_NAME.ALL,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: ROUTER_NAME.DEFAULT,
        component: HomePageView
      },
      {
        component: () => <Redirect to={ROUTER_NAME.NOT_FOUND} />
      }
    ]
  }
];

export default routes;
