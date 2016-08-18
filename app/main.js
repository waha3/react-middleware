
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store/index.js';
import App from './container/App.js';

const store = storeFactory();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(
  <Root />,
  document.getElementById('root')
);
