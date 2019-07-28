import React, { useState, useEffect } from 'react';
import { fetchUser } from './utils';

export const UseEffectFetchCleanup = () => {
  const [uid, setUid] = useState(1);
  const [user, setUser] = useState();

  useEffect(() => {
    let stillRelevant = true;  // setup

    fetchUser(uid).then(user => {
        if (stillRelevant) {
          setUser(user);
        } else {
          console.log('outdated', user);
        }
      });

    return () => {            // cleanup before unmount plus
      stillRelevant = false;  // previous effect is cleaned up
    }                         // before executing the next effect
  }, [uid]);  // dependency array

  return (
    <div>
      <label>ID: </label>
      <input type="number" value={uid} onChange={e => setUid(Number(e.target.value))} min={1} max={10} />
      { user && (
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      )}
    </div>
  )
};