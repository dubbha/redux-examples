import React from 'react';

export const Row = ({ label, children })=> (
  <div>
    <label>{label}</label>
    {children}
  </div>
);
