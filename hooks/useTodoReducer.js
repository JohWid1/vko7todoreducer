import { useReducer } from 'react';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now().toString(), task: action.payload }];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const useTodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const addTask = (task) => {
    if (task.trim()) {
      dispatch({ type: ADD_TODO, payload: task });
    }
  };

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return {
    tasks: state,
    addTask,
    removeTask,
  };
};
