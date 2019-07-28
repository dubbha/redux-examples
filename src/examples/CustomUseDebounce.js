import React, { useState, useEffect } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    console.log('effect', value);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export const CustomUseDebounce = () => {
  const name = useFormInput('');
  const debounced = useDebounce(name.value, 500);

  return (
    <>
      <label>Debounce:</label>
      <input {...name} />
      <div>{debounced}</div>
    </>
  );
};