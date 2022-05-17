/// <reference types="react" />
import containerPropsType from '../../types/layout/containerPropsType';
/**
 * @function Container
 *
 * @param props : containerPropsType
 *
 * @description Takes all Lary props and add to them the container props:
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Container row contentCenter m8 r8 p4>
 *     {children}
 * </Container>
 * ```
 * @property row it's mean flexDirection: "row"
 * @property column it's mean flexDirection: "column"
 * @property wrap it's mean flexWrap: "wrap"
 * @property nowrap it's mean flexWrap: "nowrap"
 * @property contentCenter it's mean justifyContent: "center"
 * @property contentLeft it's mean justifyContent: "flex-start"
 * @property contentRight it's mean justifyContent: "flex-end"
 *
 *
 * @returns {JSX.Element}
 */
declare const Container: (props: containerPropsType) => JSX.Element;
export default Container;
