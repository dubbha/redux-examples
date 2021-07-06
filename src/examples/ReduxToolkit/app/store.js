import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import visibilityReducer from '../features/visibilityFilter/visibilityFilterSlice';
import keywordReducer from '../features/keyword/keywordSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    visibilityFilter: visibilityReducer,
    keyword: keywordReducer,
  },
});
