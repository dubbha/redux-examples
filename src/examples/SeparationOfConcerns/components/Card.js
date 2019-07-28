import React from 'react';

export const Card = ({ children, theme }) => (
  <div className={theme}>
    {children}
  </div>
);
