/* Rotas */
import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Browse from './containers/Browse';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-root">
          <div className="app-wrapper">
            <main className="main-content">
            <Switch>
              <Route exact path='/' component={Browse}/>
              <Redirect to="/" />
            </Switch>
            </main>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Routes;
