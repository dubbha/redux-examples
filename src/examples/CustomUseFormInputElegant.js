import React, { useState } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};

export const CustomUseFormInputElegant = () => {
  const name = useFormInput('Dan');

  return (<input {...name} />);
};