import { combineReducer } from 'redux';
import { ADDTO, COMPLETEDTODO,  STATUS } from '../actions/index.js';

function todoList(state = [], action) {
  switch (action.type) {
    case ADDTO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETEDTODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, -action.index)
      ];
    default:
      return state;
  }
}

function filterStatus(state = { filter: '所有任务' }, action) {
  switch (action.filter) {
    case STATUS.all:
      return {
        filter: '所有任务'
      };
    case STATUS.completed:
      return {
        filter: '已完成的任务'
      };
    case STATUS.active:
      return {
        filter: '没有完成的任务'
      };
    default:
      return state;
  }
}

const todoApp = combineReducer({
  todoList,
  filterStatus
});

export default todoApp;
