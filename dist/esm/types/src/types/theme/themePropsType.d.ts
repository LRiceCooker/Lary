import { SxProp } from "dripsy";
import colorPropsType from "./colorPropsType";
import spacingPropsType from "./spacingPropsType";
import shapePropsType from "./shapePropsType";
import layoutPropsType from "./layoutPropsType";
import positionPropsType from "./positionPropsType";
import typographyPropsType from "./typographyPropsType";
export default interface themePropsType extends colorPropsType, spacingPropsType, shapePropsType, layoutPropsType, positionPropsType, typographyPropsType {
    style?: SxProp;
}
