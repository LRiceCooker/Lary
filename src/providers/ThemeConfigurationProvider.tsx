import React from 'react';
import ThemeContextType from '../types/provider/themeContextType';
import ThemeProviderPropsType from '../types/provider/themeProviderPropsType';
import themeOverLoader from '../utils/theme/themeOverLoader';

const ThemeConfigurationContext = React.createContext({} as ThemeContextType);

const ThemeConfigurationProvider = (props: ThemeProviderPropsType) => {
  return (
    <ThemeConfigurationContext.Provider value={themeOverLoader(props)}>
      {props.children}
    </ThemeConfigurationContext.Provider>
  );
};

const useThemeConfigurationContext = () => {
  return React.useContext(ThemeConfigurationContext);
};

export { ThemeConfigurationProvider, useThemeConfigurationContext };
