import React, { useState } from 'react';
import { useGetUserByUidQuery } from './userApiSlice';

export const User = () => {
  const [uid, setUid] = useState(1);

  const { data: user, isLoading, error } = useGetUserByUidQuery(uid);

  return (
    <>
      <label>ID: </label>
      <input type="number" value={uid} onChange={e => setUid(Number(e.target.value))} min={0} max={10} />
      
      { isLoading && <div>Loading...</div> }
      { !isLoading && error && <div>Error: {error.status}</div>}
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


