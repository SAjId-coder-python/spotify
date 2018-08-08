/* Rotas */
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import SplitPane from 'react-split-pane';

import Browse from './containers/Browse';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-wrapper">
          <main className="main-content">
            <SplitPane split="vertical" className="panel-wrapper">
              <div className="sidebar" initialSize="240px" minSize="120px" maxSize="400px">Sidebar</div>
              <Switch>
                <Route exact path='/' component={Browse}/>
                <Redirect to="/" />
              </Switch>
              <div className="friends" initialSize="240px" minSize="240px" maxSize="400px">Friends</div>
            </SplitPane>
          </main>
        </div>
      </HashRouter>
    )
  }
}

export default Routes;
