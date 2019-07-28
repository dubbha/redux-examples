import React, { useState, useEffect, useRef } from 'react';

const getCookieByName = cookieName =>
  document.cookie
    .split('; ')
    .reduce(
      (acc, cur) =>
        cur.split('=')[0] === cookieName ? `${acc}${cur.split('=')[1]}` : acc,
      ''
    );

const useCookie = cookieName => {
  const [value, setValue] = useState(() => getCookieByName(cookieName));

  useEffect(() => {
    value
      ? (document.cookie = `${cookieName}=${value}`)
      : (document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`);
  }, [value, cookieName]);

  const resetValue = () => setValue('');

  return [value, setValue, resetValue];
};

const useReloadOnChange = value => {
  const ref = useRef(value);

  useEffect(() => {
    if (ref.current !== value) {
      window.location.reload();
    }
  }, [value]);
};

export const CustomUseCookieWithReload = () => {
  const [cookie, setCookie, resetCookie] = useCookie('X-Origin');

  useReloadOnChange(cookie);

  return (
    <>
      <div>
        <label>Green: </label>
        <input
          type="radio"
          name="origin"
          checked={cookie === 'green'}
          onChange={() => setCookie('green')}
        />
      </div>
      <div>
        <label>Blue: </label>
        <input
          type="radio"
          name="origin"
          checked={cookie === 'blue'}
          onChange={() => setCookie('blue')}
        />
      </div>
      <div>
        <label>Default: </label>
        <input
          type="radio"
          name="origin"
          checked={!cookie}
          onChange={() => resetCookie()}
        />
      </div>
    </>
  );
};
