import { createStore } from 'redux';

//action
export const INCREMENT = {
  type: 'INCREMENT'
};
export const DECREMENT = {
  type: 'DECREMENT'
};


// reducer
export function counter(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//store
export const store = createStore(counter, window.devToolsExtension && window.devToolsExtension());
