import { useState, useEffect } from 'react';

export const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);  // returns MediaQueryList object
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handler = () => setMatches(media.matches);
    media.addListener(handler);
    return () => media.removeListener(handler);
  }, [query, matches]);

  return matches;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
