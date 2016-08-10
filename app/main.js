
import React, { Component } from 'react';
import { render } from 'react-dom';

class Root extends Component {
  render() {
    return (
      <div>hello world</div>
    );
  }
}

const rootElement = document.getElementById('root');

render(
  <Root />,
  rootElement
);
