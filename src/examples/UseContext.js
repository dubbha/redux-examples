import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export const UseContext = () => {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme}>I'm themed</button>
  );
};
