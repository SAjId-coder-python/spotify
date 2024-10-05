import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { HashRouter as Router } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import App from './containers/App';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store;

if (process.env.NODE_ENV === 'development') {
  // cria a store e passa os reducers
  store = applyMiddleware(promise, logger)(createStore)(persistedReducer);
} else {
  store = applyMiddleware(promise)(createStore)(persistedReducer);
}

let persistor = persistStore(store);

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild( root );

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
, document.getElementById('root'));
