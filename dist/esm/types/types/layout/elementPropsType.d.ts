/// <reference types="react" />
import { themePropsType } from '../theme';
export default interface elementPropsType extends themePropsType {
    children?: JSX.Element | JSX.Element[];
}
