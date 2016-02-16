/* eslint-disable no-unused-vars*/
import React from 'react';
/* eslint-enable no-unused-vars*/
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import HomePage from 'containers/HomePage/';
import About from 'containers/About/';
import Watches from 'containers/Watches/';

import App from 'containers/App/';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Route path="watch-collection" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={About} />
      <Route path="watches" component={Watches} />
    </Route>
  </Router>
);

export default Routes;
