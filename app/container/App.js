import React, { Component, PropTypes } from 'react';
import Selector from '../components/selector.js';
import Posts from '../components/posts.js';
import { fetchPostIfNeed, selectContent } from '../actions/index.js';
import { connect } from 'react-redux';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedContent: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, selectedContent } = this.props;
    dispatch(fetchPostIfNeed(selectedContent));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // if (nextProps.selectedContent !== this.props.selectedContent) {
    //   const { dispatch, selectedContent } = nextProps;
    //   dispatch(fetchPostIfNeed(selectedContent));
    // }
  }

  render() {
    const { posts, dispatch } = this.props;
    return (
      <div className="container">
        <Selector
          onHandleChange={(val) => dispatch(selectContent(val))}
          options={['nodejs', 'reactjs']}
        />
        <Posts
          items={posts}
        />
      </div>
    );
  }
}

function select(state) {
  const { selectedContent, postsBySelected } = state;
  const {
    isFetching,
    items: posts,
    lastUpdate,
    isExpire
  } = postsBySelected[selectedContent] || {
    isFetching: true,
    items: []
  };
  return {
    selectedContent,
    posts,
    isFetching,
    isExpire,
    lastUpdate
  };
}

export default connect(select)(App);
