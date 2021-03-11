import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../pages/Login/Auth';
import { authRoute } from '../routes/index';

console.log(authRoute);

const AppRouter = () => {
  const isAuth = false;
  if (!isAuth) {
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
        </Switch>
      </div>
    );
  }
  return <div>Content</div>;
};

export default AppRouter;
