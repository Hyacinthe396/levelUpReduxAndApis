import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newTodos = state.todos.filter(
        (todo, indx) => indx !== action.payload
      );
      return {
        ...state,
        todos: [...newTodos],
      };
    default:
      return state;
  }
};
