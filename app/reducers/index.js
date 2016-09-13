// const state = {
//   selectTitle: 'xxx',
//   titleLists: {
//     'xxx': {
//       isFetching: false,
//       isExpire: false,
//       items: [],
//       lastUpdate: ''
//     }
//   }
// };

import { combineReducers } from 'redux';
import { REQUEST_POST, RECEIEVE_POST, REFLASH, SELECT_CONTENT } from '../actions/index.js';

function selectedContent(state = 'nodejs', action) {
  if(action.type === SELECT_CONTENT) {
    return action.content;
  } else {
    return state;
  }
}


function posts(state = {
  isFetching: false,
  isExpire: false,
  items: []
}, action) {
  if(action.type === REFLASH) {
    return Object.assign({}, state, {
      isExpire: true
    });
  } else if (action.type === REQUEST_POST) {
    return Object.assign({}, state, {
      isFetching: true,
      isExpire: false
    });
  } else if (action.type === RECEIEVE_POST) {
    return Object.assign({}, state, {
      isFetching: false,
      isExpire: false,
      lastUpdate: action.receiveAt,
      items: action.posts
    });
  }
}

function postsBySelected(state = {}, action) {
  switch (action.type) {
    case RECEIEVE_POST:
    case REFLASH:
    case RECEIEVE_POST:
      return Object.assign({}, state, {
        [action.content]: posts(state[content], action)
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  selectedContent,
  postsBySelected
});

export default rootReducer;
