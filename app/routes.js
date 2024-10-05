/* Rotas */
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import SplitPane from 'react-split-pane';

import Browse from './containers/Browse';

import BottonBar from './components/layout/bottomBar';

const navigation = [
  {
    label: 'Browse',
    link: '#',
    isCurrent: true
  },
  {
    label: 'Radio',
    link: '#'
  },
  {
    label: 'Your Library'
  },
  {
    label: 'Your Daily Mix',
    link: '#'
  },
  {
    label: 'Recently Played',
    link: '#'
  },
  {
    label: 'Songs',
    link: '#'
  },
  {
    label: 'Albums',
    link: '#'
  },
  {
    label: 'Artists',
    link: '#'
  },
  {
    label: 'Stations',
    link: '#'
  },
  {
    label: 'Local Files',
    link: '#'
  },
  {
    label: 'Videos',
    link: '#'
  },
  {
    label: 'Podcasts',
    link: '#'
  },
  {
    label: 'Playlists'
  },
  {
    label: 'Playlist 1',
    link: '#'
  },
  {
    label: 'Playlist 2',
    link: '#'
  },
  {
    label: 'Playlist 3',
    link: '#'
  },
  {
    label: 'Playlist 4',
    link: '#'
  },
  {
    label: 'Playlist 5',
    link: '#'
  }
]

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-wrapper">
          <SplitPane split="vertical" className="panel-wrapper">
            <div className="sidebar" initialSize="240px" minSize="120px" maxSize="400px">
              <dl className="sidebar-nav">
                { navigation.map(item => {
                  if (item.hasOwnProperty('link')) {
                    const classes = item.hasOwnProperty('isCurrent') && item.isCurrent ? 'sidebar-nav__item is-current' : 'sidebar-nav__item';

                    return <dd><a className={classes} href={item.link}>{item.label}</a></dd>;
                  }

                  return <dt className="sidebar-nav__title">{item.label}</dt>;
                }) }
              </dl>
            </div>
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
