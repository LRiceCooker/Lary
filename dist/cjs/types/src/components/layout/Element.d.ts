/// <reference types="react" />
import elementPropsType from "../../types/layout/elementPropsType";
/**
 * @function Element
 *
 * @param props : elementPropsType
 *
 * @description Takes all Lary props, it's basicaly a View component, but with some extra props
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Element bgPrimary p5 m8>
 *      {children}
 * </Element>
 * ```
 *
 * @returns {JSX.Element}
 */
declare const Element: (props: elementPropsType) => JSX.Element;
export default Element;
