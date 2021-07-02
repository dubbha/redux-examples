// action types
export const SAVE_USER = 'SAVE_USER';
export const FETCH_BLOCKED = 'FETCH_BLOCKED';

export const saveUser = user => ({ type: SAVE_USER, user });            // sync action creator
export const fetchBlocked = reason => ({ type: FETCH_BLOCKED, reason });

export const fetchUser = uid => dispatch =>                              // async action creator
  fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
    .then(response => response.json())
    .then(user => dispatch(saveUser(user)));             // dispatch sync or async action

export const fetchUserConditionally = uid => (dispatch, getState) => {    // with getState param
  const { users: { limitReached } } = getState();

  dispatch(limitReached ? fetchBlocked('Limit reached') : fetchUser(uid));
};