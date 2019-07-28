import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemedFooter = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className={theme} style={{width: '100vw'}}>
      © 3000 Themed Inc.
    </footer>
  );
}