import React from 'react';
import { ThemedButton } from './ThemedButton';

export const Header = () => (
  <header>
    <ThemedButton text="welcome" />
    <ThemedButton text="about us" />
    <ThemedButton text="contacts" />
  </header>
);
