/// <reference types="react" />
import { themePropsType } from "../theme";
export default interface containerPropsType extends themePropsType {
    container?: boolean;
    fullHeight?: boolean;
    scroll?: boolean;
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    nowrap?: boolean;
    contentCenter?: boolean;
    contentLeft?: boolean;
    contentRight?: boolean;
    children?: JSX.Element | JSX.Element[];
}
