
import React, { Component } from 'react';
import { render } from 'react-dom';
import { store, INCREMENT, DECREMENT } from './components/App.js';

class Root extends Component {
  render() {
    return (
      <div>
        <div>add {store.getState()}</div>
        <button onClick={() => store.dispatch(INCREMENT)}>+</button>
        <button onClick={() => store.dispatch(DECREMENT)}>-</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');


function renderCom() {
  render(
    <Root />,
    rootElement
  );
}

renderCom();

store.subscribe(renderCom);
