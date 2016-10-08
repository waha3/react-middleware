import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index.js';

// saga
// import createSagaMiddleware from 'redux-saga';
// import sagas from '../midddleware/sagas.js';

const midddleware = [ thunk ];

const loggerMiddleware = createLogger();
// midddleware.push(loggerMiddleware);

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(...midddleware)
);

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore);

// export default function storeFactory(initState) {
//   return createStoreWithMiddleware(rootReducer, initState);
// }

export default store;
