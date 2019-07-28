import React from 'react';
import { useMedia } from './useMedia';

export const Body = () => {
  const small = useMedia('(max-width: 400px)');
  const medium = useMedia('(max-width: 600px)');
  const large = useMedia('(max-width: 800px)');

  return (
    <div>
      Body: {small
        ? 'S': medium
          ? 'M' : large
            ? 'L' : 'XL'}
    </div>);
};
