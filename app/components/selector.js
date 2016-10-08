import React, { Component, PropTypes } from 'react';

class Selector extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onHandleChange: PropTypes.func.isRequired
  }

  handleChange(val) {
    this.props.onHandleChange(val);
  }

  render() {
    const { options } = this.props;
    return (
      <div className="selector">
        <select onChange={e => this.handleChange(e.target.value)}>
        {
          options.map((v, i) =>
            <option key={i} value={v}>{v}</option>
          )
        }
        </select>
      </div>
    );
  }
}

export default Selector;
