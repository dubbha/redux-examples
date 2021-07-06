import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './userSlice';

export const User = () => {
  const dispatch = useDispatch();

  const [uid, setUid] = useState(1);
  useEffect(() => {
    dispatch(fetchUser(uid));
  }, [dispatch, uid]);

  const isLoading = useSelector(state => state.user.isLoading);
  const error = useSelector(state => state.user.error);
  const user = useSelector(state => state.user.entity);

  return (
    <>
      <label>ID: </label>
      <input type="number" value={uid} onChange={e => setUid(Number(e.target.value))} min={0} max={10} />
      
      { isLoading && <div>Loading...</div> }
      { !isLoading && error && <div>Error: {error}</div>}
      { !isLoading && !error && user && (
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      )}
    </>
  );
}


