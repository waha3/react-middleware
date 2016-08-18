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

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import stateReducer from '../reducers/index.js';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function storeFactory(initState) {
  return createStoreWithMiddleware(stateReducer, initState);
}
