import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoute, publicRoute } from '../../routes/index';
import paths from '../../utils/constants';

const AppRouter = () => {
  const isAuth = true;

  return (
    <div>
      <Switch>
        {authRoute.map(({ path, component }, index) => {
          return (
            <Route
              key={`${path} in ${index}`}
              path={path}
              component={component}
              exact
            />
          );
        })}
        {isAuth &&
          publicRoute.map(({ path, component }, index) => {
            return (
              <Route
                key={`${path} in ${index}`}
                path={path}
                component={component}
                exact
              />
            );
          })}
        <Redirect to={paths.mainPath} />
      </Switch>
    </div>
  );
};

export default AppRouter;
