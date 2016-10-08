
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './container/App.js';

// const store = storeFactory(window.devToolsExtension ? window.devToolsExtension() : f => f);

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
