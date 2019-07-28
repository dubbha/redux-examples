import React from 'react';
import { useMedia } from './useMedia';

export const Header = () => {
  const narrow = useMedia('(max-width: 500px)');

  return <div>Header: {narrow ? 'Narrow' : 'Wide'}</div>;
};
