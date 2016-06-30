import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './App';
import TodoApp from './components/TodoApp';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TodoApp} />
  </Route>
);

export default routes;
