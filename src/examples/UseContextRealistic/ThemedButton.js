import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemedButton = ({ text }) => {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme} style={{ width: '33.3333vw'}}>
      {text}
    </button>
  );
};