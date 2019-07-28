import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export const UseContext2 = () => <Toolbar />;

const Toolbar = () => <ThemedButton />;

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme}>I'm themed</button>
  );
};

