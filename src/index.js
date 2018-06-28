import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
// deprecated or moved to other files
// const $ = require('jquery');
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// import $ from 'jquery';

// user made imports
import './style.scss';
import App from './components/app';

const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('main'),
);


// console.log('starting up!');
