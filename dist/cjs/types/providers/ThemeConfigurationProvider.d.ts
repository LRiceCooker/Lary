/// <reference types="react" />
import ThemeContextType from '../types/provider/themeContextType';
import ThemeProviderPropsType from '../types/provider/themeProviderPropsType';
declare const ThemeConfigurationProvider: (props: ThemeProviderPropsType) => JSX.Element;
declare const useThemeConfigurationContext: () => ThemeContextType;
export { ThemeConfigurationProvider, useThemeConfigurationContext };
