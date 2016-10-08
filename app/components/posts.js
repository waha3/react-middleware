import React, { Component, PropTypes } from 'react';

class Posts extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    const { items } = this.props;
    return (
      <div className="content">
      {
        items.map((v, i) =>
          <div key={i}>{v.title}</div>
        )
      }
      </div>
    );
  }
}

export default Posts;
