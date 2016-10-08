export const REQUEST_POST = 'REQUEST_POST';
export const RECEIEVE_POST = 'RECEIEVE_POST';
export const SELECT_CONTENT = 'SELECT_CONTENT';
export const REFRESH = 'REFRESH';

export function selectContent(content) {
  return {
    type: SELECT_CONTENT,
    content
  };
}

export function refresh(content) {
  return {
    type: REFRESH,
    content
  };
}

function requestPost(content) {
  return {
    type: REQUEST_POST,
    content
  };
}

function receievePost(content, json) {
  return {
    type: RECEIEVE_POST,
    content,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  };
}

export function fetchPost(content) {
  return dispatch => {
    dispatch(requestPost(content));
    return fetch(`http://www.subreddit.com/r/${content}.json`)
      .then(res => res.json())
      .then(json => dispatch(receievePost(content, json)));
  };
}

function shouldFetchPost(state, content) {
  const isHasContent = state.postsBySelected[content];
  if(!isHasContent) {
    return true;
  } else if(isHasContent.isFetching) {
    return false;
  } else {
    return isHasContent.isExpire;
  }
}

export function fetchPostIfNeed(content) {
  return (dispatch, getState) => {
    if(shouldFetchPost(getState(), content)) {
      return dispatch(fetchPost(content));
    }
  };
}
