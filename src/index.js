import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);