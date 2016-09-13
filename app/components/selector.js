import React, { Component } from 'react';

class Selector extends Component {
  render() {
    return (
      <div className="selector">
        <select>
          <option value="">react</option>
          <option value="">frontend</option>
        </select>
      </div>
    );
  }
}

export default Selector;
