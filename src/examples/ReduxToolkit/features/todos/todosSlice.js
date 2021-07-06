import { createSlice, createSelector } from '@reduxjs/toolkit'; // reselect createSelector re-exported from RTK
import { selectVisibilityFilter } from '../visibilityFilter/visibilityFilterSlice';
import { selectKeyword } from '../keyword/keywordSlice';

const initialState = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(                                  // Redux Toolkit allows us to write "mutating" logic in reducers. It
        { text: action.payload, completed: false } // doesn't actually mutate the state because it uses the Immer library
      );                                           // which detects changes to a "draft state" and produces a brand new
    },                                             // immutable state based off those changes
    complete: (state, action) => {
      state[action.payload].completed = true
    },
    toggle: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed
    }
  }
});

// action creators are generated for each case reducer function
export const { add, complete, toggle } = todosSlice.actions;

// reducer default export
export default todosSlice.reducer;

// selectors
export const selectTodos = state => state.todos;

export const selectVisibleTodos = createSelector(                       // memoized selector
  [selectVisibilityFilter, selectTodos],        // only re-calculated if input-selectors change
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }
);

export const selectVisibleTodosFilteredByKeyword = createSelector(  // composing selectors
  [selectVisibleTodos, selectKeyword],           // memoized selector is itself an input-selector
  (visibleTodos, keyword) =>
    visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)
);
