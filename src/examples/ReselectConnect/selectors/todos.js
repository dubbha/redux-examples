import { createSelector } from 'reselect';
import { getVisibilityFilter } from './visibilityFilter';
import { getKeyword } from './keyword';

export const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(                       // memoized selector
  [getVisibilityFilter, getTodos],        // only re-calculated if input-selectors change
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

export const getVisibleTodosFilteredByKeyword = createSelector(  // composing selectors
  [getVisibleTodos, getKeyword],           // memoized selector is itself an input-selector
  (visibleTodos, keyword) =>
    visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)
)