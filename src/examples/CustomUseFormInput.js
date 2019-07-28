import React, { useState } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  return [value, handleChange];
};

export const CustomUseFormInput = () => {
  const [name, setName] = useFormInput('Dan');

  return (<input value={name} onChange={setName} />);
};