import { FETCH, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_BLOCKED } from '../actions';

export const users = (
  state = {
    cache: [],    
    isLoading: false,
    error: '',
    limitReached: false,
  },
  action,
) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SUCCEEDED: {
      return {
        ...state,
        cache: [
          ...state.cache,
          action.user,
        ],
        limitReached: state.cache.length > 3 ? true : false,
        isLoading: false,
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    }
    case FETCH_BLOCKED:
      return {
        ...state,
        error: action.reason,
      }
    default:
      return state;
  }
}



