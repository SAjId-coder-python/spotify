/* Rotas */
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import SplitPane from 'react-split-pane';

import Browse from './containers/Browse';

import BottonBar from './components/layout/bottomBar';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-wrapper">
          <SplitPane split="vertical" className="panel-wrapper">
            <div className="sidebar" initialSize="240px" minSize="120px" maxSize="400px">Sidebar</div>
              <div className="app-content">
                <header className="header">Header</header>
                <main className="main-content">
                  <Switch>
                    <Route exact path='/' component={Browse}/>
                    <Redirect to="/" />
                  </Switch>
                </main>
              </div>
            <div className="friend-activity" initialSize="240px" minSize="240px" maxSize="400px">
              <h4 className="friend-activity__title">Friend activity</h4>
              <span className="separator"></span>
            </div>
          </SplitPane>
          <BottonBar />
        </div>
      </HashRouter>
    )
  }
}

export default Routes;
