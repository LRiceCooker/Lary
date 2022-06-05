import type ThemeContextType from './themeContextType';

export default interface ThemeProviderPropsType {
  children: JSX.Element;
  color?: ThemeContextType['color'];
  layout?: ThemeContextType['layout'];
  position?: ThemeContextType['position'];
  shape?: ThemeContextType['shape'];
  typography?: ThemeContextType['typography'];
  spacing?: ThemeContextType['spacing'];
}
