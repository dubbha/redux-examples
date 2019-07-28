import React, { useState, useEffect } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
};

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
}

export const CustomUseDocumentTitle = () => {
  const name = useFormInput('Dan');

  useDocumentTitle(name.value);

  return (<input {...name} />);
};