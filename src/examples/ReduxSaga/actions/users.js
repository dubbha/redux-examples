// action types
export const FETCH = 'FETCH';                       // FETCH_REQUESTED
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_BLOCKED = 'FETCH_BLOCKED';

export const fetch = uid => ({ type: FETCH, uid });
export const fetchSucceeded = user => ({ type: FETCH_SUCCEEDED, user });
export const fetchFailed = error => ({ type: FETCH_FAILED, error });
export const fetchBlocked = reason => ({ type: FETCH_BLOCKED, reason });
