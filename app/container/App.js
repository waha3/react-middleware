import React, { Component, PropTypes } from 'react';
import Selector from '../components/selector.js';
import Posts from '../components/posts.js';
import { fetchPostIfNeed } from '../actions/index.js';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostIfNeed());
  }

  render() {
    return (
      <div className="container">
        <Selector />
        <Posts />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};


function select(state) {
  return {
    selectTitle: state.selectTitle,
    titleLists: state.titleLists
  };
}

export default connect(select)(App);
