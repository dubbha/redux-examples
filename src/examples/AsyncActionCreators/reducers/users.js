import { SAVE_USER, FETCH_BLOCKED } from '../actions';

export const users = (
  state = {
    cache: [],
    limitReached: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        cache: [
          ...state.cache,
          action.user,
        ],
        limitReached: state.cache.length > 3 ? true : false,
      };
    case FETCH_BLOCKED:
      return {
        ...state,
        error: action.reason,
      }
    default:
      return state;
  }
}



