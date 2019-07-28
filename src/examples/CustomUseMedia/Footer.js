import React from 'react';
import { useMedia } from './useMedia';

export const Footer = () => {
  const portrait = useMedia('(orientation: portrait)');
  const retina = useMedia('(min-resolution: 2dppx)');

  return (
    <div>Footer: {portrait ? 'Portrait' : 'Landscape'} {retina && 'Retina'}
    </div>
  );
};
