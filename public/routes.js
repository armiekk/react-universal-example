import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './App';
import TodoApp from './pages/TodoApp';
import Profile from './pages/profile';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TodoApp} />
    <Route path="profile" component={Profile} />
  </Route>
);

export default routes;
