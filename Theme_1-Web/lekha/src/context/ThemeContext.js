import React, { createContext, useContext, useState } from 'react';
import themes from '../utils/colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return(
    <ThemeContext.Provider value={{ theme: themes[Mode], toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)