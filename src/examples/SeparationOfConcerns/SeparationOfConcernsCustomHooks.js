import React, { useState, useContext, useEffect } from 'react';
import { Card, Row, Input, Text } from './components';
import ThemeContext from './ThemeContext';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  }
}

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

export const SeparationOfConcernsCustomHooks = () => {
  const name = useFormInput('Mary');
  const surname = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <Card theme={theme}>
      <Row label="Name">
        <Input {...name} />
      </Row>
      <Row label="Surname">
        <Input {...surname} />
      </Row>
      <Row label="Width">
        <Text>{width}</Text>
      </Row>
    </Card>
  );
};
