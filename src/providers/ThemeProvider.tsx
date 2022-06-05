import { DripsyProvider } from 'dripsy';
import { useThemeConfigurationContext } from './ThemeConfigurationProvider';
import generateTheme from '../style/theme/theme';
import React from 'react';

const ThemeContext = React.createContext({});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const configurationContext = useThemeConfigurationContext();
  return (
    <ThemeContext.Provider value={{}}>
      <DripsyProvider theme={generateTheme(configurationContext)}>{children}</DripsyProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

export { ThemeProvider, useThemeContext };
