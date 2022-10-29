/// <reference types="react" />
import ThemeContextType from './themeContextType';
export default interface LaryProviderPropsType {
    children: JSX.Element;
    color?: ThemeContextType['color'];
    layout?: ThemeContextType['layout'];
    position?: ThemeContextType['position'];
    shape?: ThemeContextType['shape'];
    typography?: ThemeContextType['typography'];
    spacing?: ThemeContextType['spacing'];
}
