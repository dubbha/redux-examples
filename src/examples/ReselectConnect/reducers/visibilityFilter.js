// visibility filter reducer, pure function
export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;         // return new state based on action.type
    default:
      return state;                 // return state unchanged by default
  }
}