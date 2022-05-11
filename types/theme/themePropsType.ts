import { SxProp } from "dripsy";
import colorPropsType from "./colorPropsType";
import spacingPropsType from "./spacingPropsType";
import shapePropsType from "./shapePropsType";
import layoutPropsType from "./layoutPropsType";
import positionPropsType from "./positionPropsType";

export default interface themePropsType extends colorPropsType, spacingPropsType, shapePropsType, layoutPropsType, positionPropsType {
    style?: SxProp
}