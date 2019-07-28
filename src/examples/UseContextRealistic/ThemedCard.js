/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemedCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <span className={`emoji ${theme}`} style={{top: 'calc(50% - 4vh)'}}>
      🎣
    </span>
  );
}