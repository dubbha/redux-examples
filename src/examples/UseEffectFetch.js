import React, { useState, useEffect } from 'react';
import { fetchUser } from './utils';

export const UseEffectFetch = () => {
  const [uid, setUid] = useState(1);
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser(uid).then(user => setUser(user));
  }, [uid]);  // only fire when uid changes

  return (
    <>
      <label>ID: </label>
      <input type="number" value={uid} onChange={e => setUid(Number(e.target.value))} min={1} max={10} />
      { user && (
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      )}
    </>
  )
};