import React, { useState, useContext, useEffect } from 'react';
import { Card, Row, Input, Text } from './components';
import ThemeContext from './ThemeContext';

export const SeparationOfConcernsHooks = () => {
  const theme = useContext(ThemeContext);

  const [name, setName] = useState('Harry');
  const [surname, setSurname] = useState('Potter');
  useEffect(() => {
    document.title = `${name} ${surname}`;
  }, [name, surname]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Card theme={theme}>
      <Row label="Name">
        <Input value={name} onChange={e => setName(e.target.value)} />
      </Row>
      <Row label="Surname">
        <Input value={surname} onChange={e => setSurname(e.target.value)} />
      </Row>
      <Row label="Width">
        <Text>{width}</Text>
      </Row>
    </Card>
  );
};
