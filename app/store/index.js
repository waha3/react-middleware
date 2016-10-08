import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index.js';

const midddleware = [ thunk ];

const loggerMiddleware = createLogger();
midddleware.push(loggerMiddleware);

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(...midddleware)
);

// saga
// import createSagaMiddleware from 'redux-saga';
// import sagas from '../midddleware/sagas.js';

export default store;
