export const ADDTO = 'ADDTO';
export const COMPLETEDTODO = 'COMPLETEDTODO';
export const FILTERS = 'FILTERS';

export const STATUS = {
  completed: Symbol(),
  active: Symbol(),
  all: Symbol()
};

export function addTo(text) {
  return {
    type: ADDTO,
    text
  };
}

export function completedTodo(index) {
  return {
    type: COMPLETEDTODO,
    index
  };
}

export function filterTodo(filter) {
  return {
    type: FILTERS,
    filter
  };
}
