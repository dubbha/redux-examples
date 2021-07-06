const initialState = '';

export const keyword = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return action.keyword;
    case 'RESET_KEYWORD':
      return initialState;
    default:
      return state;
  }
}