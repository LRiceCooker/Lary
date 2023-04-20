import { ComponentType } from 'react';
import { themePropsType } from '../types/theme';
/**
 * @function laryfy
 * @param component : ComponentType<unknown>
 *
 * @description It takes a component and return it with all the Lary props. It apply also the global theme to the component.
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * import { TextInput } from 'react-native-paper';
 *
 * const LaryfiedTextInput = laryfy<React.ComponentProps<typeof TextInput>>(TextInput)
 *
 *
 * //then you can use it like this in your app:
 *
 * <LaryfiedTextInput bgSecondary relative f2 autoComplete='false' label='test' value='test' onChangeText={(text: string) => {console.log(text)}}/>
 *
 * //in this case, "bgSecondary", "relative", "f2" are the Lary's props. Others props are the props of the TextInput component.
 * ```
 *
 * @property bd(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the border color to the choosen one.
 * @property borderColor To set the border color.
 * @property in(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the color to the choosen one.
 * @property color To set the color.
 * @property bg(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the background color to the choosen one.
 * @property backgroundColor To set the background color.
 * @property align(Center-Start-End) To set the alignement to the secondary axis.
 * @property justify(Center-Start-End-Between-Around-evenly) To set the alignement to the main axis.
 * @property xl Display itself in min 1280px device width.
 * @property lg Display itself in min 1024px and max 1979px device width.
 * @property md Display itself in min 768px and max 1023px device width.
 * @property sm Display itself in max 640px device width.
 * @property f(1..8) To set flex property to the choosen one.
 * @property fn To set flex property to 'none'.
 * @property flex To set the flex property.
 * @property fb(1..8) To set the flexBasis property to the choosen one.
 * @property fbFull To set the flexBasis property to '100%'.
 * @property flexBasis To set the flexBasis property.
 * @property absolute To set the position to absolute.
 * @property relative To set the position to relative.
 * @property top(1..8) To set the top property to the choosen one.
 * @property top To set the top property.
 * @property bottom(1..8) To set the bottom property to the choosen one.
 * @property bottom To set the bottom property.
 * @property left(1..8) To set the left property to the choosen one.
 * @property left To set the left property.
 * @property right(1..8) To set the right property to the choosen one.
 * @property right To set the right property.
 * @property m(1..8) To set the margin property to the choosen one.
 * @property margin To set the margin property.
 * @property mr(1..8) To set the marginRight property to the choosen one.
 * @property marginRight To set the marginRight property.
 * @property ml(1..8) To set the marginLeft property to the choosen one.
 * @property marginLeft To set the marginLeft property.
 * @property mt(1..8) To set the marginTop property to the choosen one.
 * @property marginTop To set the marginTop property.
 * @property mb(1..8) To set the marginBottom property to the choosen one.
 * @property marginBottom To set the marginBottom property.
 * @property marginX To set the margin left and right property.
 * @property marginY To set the margin top and bottom property.
 * @property r(1..8) To set the borderRadius property to the choosen one.
 * @property borderRadius To set the borderRadius property.
 * @property b(1..8) To set the borderWidth property to the choosen one.
 * @property borderWidth To set the borderWidth property.
 * @property p(1..8) To set the padding property to the choosen one.
 * @property padding To set the padding property.
 * @property pl(1..8) To set the paddingLeft property to the choosen one.
 * @property paddingLeft To set the paddingLeft property.
 * @property pr(1..8) To set the paddingRight property to the choosen one.
 * @property paddingRight To set the paddingRight property.
 * @property pt(1..8) To set the paddingTop property to the choosen one.
 * @property paddingTop To set the paddingTop property.
 * @property pb(1..8) To set the paddingBottom property to the choosen one.
 * @property widthFull To set the width property to 100%.
 * @property heightFull To set the height property to 100%.
 * @property widthScreen To set the width property to 100vw.
 * @property heightScreen To set the height property to 100vh.
 * @property width To set the width property.
 * @property height To set the height property.
 * @property paddingBottom To set the paddingBottom property.
 * @property paddingTop To set the paddingTop property.
 * @property paddingX To set the padding left and right property.
 * @property paddingY To set the padding top and bottom property.
 * @property paddingLeft To set the paddingLeft property.
 * @property paddingRight To set the paddingRight property.
 * @property borderRadius To set the borderRadius property.
 * @property borderEndEndRadius To set the borderEndEndRadius property.
 * @property borderEndStartRadius To set the borderEndStartRadius property.
 * @property borderStartEndRadius To set the borderStartEndRadius property.
 * @property borderStartStartRadius To set the borderStartStartRadius property.
 * @property borderBottomEndRadius To set the borderBottomEndRadius property.
 * @property borderBottomStartRadius To set the borderBottomStartRadius property.
 * @property borderTopEndRadius To set the borderTopEndRadius property.
 * @property borderTopStartRadius To set the borderTopStartRadius property.
 * @property borderTopWidth To set the borderTopWidth property.
 * @property borderLeftWidth To set the borderLeftWidth property.
 * @property borderRightWidth To set the borderRightWidth property.
 * @property borderBottomWidth To set the borderBottomWidth property.
 * @property borderWidth To set the borderWidth property.
 * @property bold To set the fontWeight property to bold.
 * @property text(Center-Right-Left) To set the textAlign property to the choosen one.
 * @property italic To set the fontStyle property to italic.
 * @property underline To set the textDecorationLine property to underline.
 * @property text(sm-xs-base-lg-xl-2xl-3xl-4xl-5xl-6xl-7xl-8xl-9xl) To set the fontSize property to defined one.
 *
 * @returns {React.FunctionComponent}
 */
declare function laryfy<componentPropsType>(component: ComponentType<unknown>): (props?: componentPropsType & themePropsType) => JSX.Element;
export default laryfy;
