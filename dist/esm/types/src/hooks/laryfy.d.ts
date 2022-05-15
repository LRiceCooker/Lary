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
 * @property bdInfo To set the border color to info.
 * @property bdSuccess To set the border color to success.
 * @property bdWarning To set the border color to warning.
 * @property bdPrimary To set the border color to primary.
 * @property bdSecondary To set the border color to secondary.
 * @property bdLight To set the border color to light.
 * @property bdMuted To set the border color to muted.
 * @property bdDanger To set the border color to danger.
 * @property bdDark To set the border color to dark.
 * @property bdSuccess To set the border color to success.
 * @property bdWhite To set the border color to white.
 * @property borderColor To set the border color.
 * @property inInfo To set the color to info.
 * @property inSuccess To set the color to success.
 * @property inWarning To set the color to warning.
 * @property inPrimary To set the color to primary.
 * @property inSecondary To set the color to secondary.
 * @property inLight To set the color to light.
 * @property inMuted To set the color to muted.
 * @property inDanger To set the color to danger.
 * @property inDark To set the color to dark.
 * @property inSuccess To set the color to success.
 * @property inWite To set the color to white.
 * @property color To set the color.
 * @property bgInfo To set the background color to info.
 * @property bgSuccess To set the background color to success.
 * @property bgWarning To set the background color to warning.
 * @property bgPrimary To set the background color to primary.
 * @property bgSecondary To set the background color to secondary.
 * @property bgLight To set the background color to light.
 * @property bgMuted To set the background color to muted.
 * @property bgDanger To set the background color to danger.
 * @property bgDark To set the background color to dark.
 * @property bgSuccess To set the background color to success.
 * @property bgWhite To set the background color to white.
 * @property backgroundColor To set the background color.
 * @property alignCenter To set the alignement to center.
 * @property alignLeft To set the alignement to left.
 * @property alignRight To set the alignement to right.
 * @property xl Display itself in min 1280px device width.
 * @property lg Display itself in min 1024px and max 1979px device width.
 * @property md Display itself in min 768px and max 1023px device width.
 * @property sm Display itself in max 640px device width.
 * @property f1 To set flex property to flex level 1.
 * @property f2 To set flex property to flex level 2.
 * @property f3 To set flex property to flex level 3.
 * @property f4 To set flex property to flex level 4.
 * @property f5 To set flex property to flex level 5.
 * @property f6 To set flex property to flex level 6.
 * @property f7 To set flex property to flex level 7.
 * @property f8 To set flex property to flex level 8.
 * @property fn To set flex property to 'none'.
 * @property flex To set the flex property.
 * @property fb1 To set the flexBasis property to flexBasis level 1.
 * @property fb2 To set the flexBasis property to flexBasis level 2.
 * @property fb3 To set the flexBasis property to flexBasis level 3.
 * @property fb4 To set the flexBasis property to flexBasis level 4.
 * @property fb5 To set the flexBasis property to flexBasis level 5.
 * @property fb6 To set the flexBasis property to flexBasis level 6.
 * @property fb7 To set the flexBasis property to flexBasis level 7.
 * @property fb8 To set the flexBasis property to flexBasis level 8.
 * @property fbFull To set the flexBasis property to '100%'.
 * @property flexBasis To set the flexBasis property.
 * @property absolute To set the position to absolute.
 * @property relative To set the position to relative.
 * @property top1 To set the top property to top level 1.
 * @property top2 To set the top property to top level 2.
 * @property top3 To set the top property to top level 3.
 * @property top4 To set the top property to top level 4.
 * @property top5 To set the top property to top level 5.
 * @property top6 To set the top property to top level 6.
 * @property top7 To set the top property to top level 7.
 * @property top8 To set the top property to top level 8.
 * @property top To set the top property.
 * @property bottom1 To set the bottom property to bottom level 1.
 * @property bottom2 To set the bottom property to bottom level 2.
 * @property bottom3 To set the bottom property to bottom level 3.
 * @property bottom4 To set the bottom property to bottom level 4.
 * @property bottom5 To set the bottom property to bottom level 5.
 * @property bottom6 To set the bottom property to bottom level 6.
 * @property bottom7 To set the bottom property to bottom level 7.
 * @property bottom8 To set the bottom property to bottom level 8.
 * @property bottom To set the bottom property.
 * @property left1 To set the left property to left level 1.
 * @property left2 To set the left property to left level 2.
 * @property left3 To set the left property to left level 3.
 * @property left4 To set the left property to left level 4.
 * @property left5 To set the left property to left level 5.
 * @property left6 To set the left property to left level 6.
 * @property left7 To set the left property to left level 7.
 * @property left8 To set the left property to left level 8.
 * @property left To set the left property.
 * @property right1 To set the right property to right level 1.
 * @property right2 To set the right property to right level 2.
 * @property right3 To set the right property to right level 3.
 * @property right4 To set the right property to right level 4.
 * @property right5 To set the right property to right level 5.
 * @property right6 To set the right property to right level 6.
 * @property right7 To set the right property to right level 7.
 * @property right8 To set the right property to right level 8.
 * @property right To set the right property.
 * @property m1 To set the margin property to margin level 1.
 * @property m2 To set the margin property to margin level 2.
 * @property m3 To set the margin property to margin level 3.
 * @property m4 To set the margin property to margin level 4.
 * @property m5 To set the margin property to margin level 5.
 * @property m6 To set the margin property to margin level 6.
 * @property m7 To set the margin property to margin level 7.
 * @property m8 To set the margin property to margin level 8.
 * @property margin To set the margin property.
 * @property mr1 To set the marginRight property to marginRight level 1.
 * @property mr2 To set the marginRight property to marginRight level 2.
 * @property mr3 To set the marginRight property to marginRight level 3.
 * @property mr4 To set the marginRight property to marginRight level 4.
 * @property mr5 To set the marginRight property to marginRight level 5.
 * @property mr6 To set the marginRight property to marginRight level 6.
 * @property mr7 To set the marginRight property to marginRight level 7.
 * @property mr8 To set the marginRight property to marginRight level 8.
 * @property marginRight To set the marginRight property.
 * @property ml1 To set the marginLeft property to marginLeft level 1.
 * @property ml2 To set the marginLeft property to marginLeft level 2.
 * @property ml3 To set the marginLeft property to marginLeft level 3.
 * @property ml4 To set the marginLeft property to marginLeft level 4.
 * @property ml5 To set the marginLeft property to marginLeft level 5.
 * @property ml6 To set the marginLeft property to marginLeft level 6.
 * @property ml7 To set the marginLeft property to marginLeft level 7.
 * @property ml8 To set the marginLeft property to marginLeft level 8.
 * @property marginLeft To set the marginLeft property.
 * @property mt1 To set the marginTop property to marginTop level 1.
 * @property mt2 To set the marginTop property to marginTop level 2.
 * @property mt3 To set the marginTop property to marginTop level 3.
 * @property mt4 To set the marginTop property to marginTop level 4.
 * @property mt5 To set the marginTop property to marginTop level 5.
 * @property mt6 To set the marginTop property to marginTop level 6.
 * @property mt7 To set the marginTop property to marginTop level 7.
 * @property mt8 To set the marginTop property to marginTop level 8.
 * @property marginTop To set the marginTop property.
 * @property mb1 To set the marginBottom property to marginBottom level 1.
 * @property mb2 To set the marginBottom property to marginBottom level 2.
 * @property mb3 To set the marginBottom property to marginBottom level 3.
 * @property mb4 To set the marginBottom property to marginBottom level 4.
 * @property mb5 To set the marginBottom property to marginBottom level 5.
 * @property mb6 To set the marginBottom property to marginBottom level 6.
 * @property mb7 To set the marginBottom property to marginBottom level 7.
 * @property mb8 To set the marginBottom property to marginBottom level 8.
 * @property marginBottom To set the marginBottom property.
 * @property marginX To set the margin left and right property.
 * @property marginY To set the margin top and bottom property.
 * @property r1 To set the borderRadius property to borderRadius level 1.
 * @property r2 To set the borderRadius property to borderRadius level 2.
 * @property r3 To set the borderRadius property to borderRadius level 3.
 * @property r4 To set the borderRadius property to borderRadius level 4.
 * @property r5 To set the borderRadius property to borderRadius level 5.
 * @property r6 To set the borderRadius property to borderRadius level 6.
 * @property r7 To set the borderRadius property to borderRadius level 7.
 * @property r8 To set the borderRadius property to borderRadius level 8.
 * @property borderRadius To set the borderRadius property.
 * @property b1 To set the borderWidth property to borderWidth level 1.
 * @property b2 To set the borderWidth property to borderWidth level 2.
 * @property b3 To set the borderWidth property to borderWidth level 3.
 * @property b4 To set the borderWidth property to borderWidth level 4.
 * @property b5 To set the borderWidth property to borderWidth level 5.
 * @property b6 To set the borderWidth property to borderWidth level 6.
 * @property b7 To set the borderWidth property to borderWidth level 7.
 * @property b8 To set the borderWidth property to borderWidth level 8.
 * @property borderWidth To set the borderWidth property.
 * @property p1 To set the padding property to padding level 1.
 * @property p2 To set the padding property to padding level 2.
 * @property p3 To set the padding property to padding level 3.
 * @property p4 To set the padding property to padding level 4.
 * @property p5 To set the padding property to padding level 5.
 * @property p6 To set the padding property to padding level 6.
 * @property p7 To set the padding property to padding level 7.
 * @property p8 To set the padding property to padding level 8.
 * @property padding To set the padding property.
 * @property pl1 To set the paddingLeft property to paddingLeft level 1.
 * @property pl2 To set the paddingLeft property to paddingLeft level 2.
 * @property pl3 To set the paddingLeft property to paddingLeft level 3.
 * @property pl4 To set the paddingLeft property to paddingLeft level 4.
 * @property pl5 To set the paddingLeft property to paddingLeft level 5.
 * @property pl6 To set the paddingLeft property to paddingLeft level 6.
 * @property pl7 To set the paddingLeft property to paddingLeft level 7.
 * @property pl8 To set the paddingLeft property to paddingLeft level 8.
 * @property paddingLeft To set the paddingLeft property.
 * @property pr1 To set the paddingRight property to paddingRight level 1.
 * @property pr2 To set the paddingRight property to paddingRight level 2.
 * @property pr3 To set the paddingRight property to paddingRight level 3.
 * @property pr4 To set the paddingRight property to paddingRight level 4.
 * @property pr5 To set the paddingRight property to paddingRight level 5.
 * @property pr6 To set the paddingRight property to paddingRight level 6.
 * @property pr7 To set the paddingRight property to paddingRight level 7.
 * @property pr8 To set the paddingRight property to paddingRight level 8.
 * @property paddingRight To set the paddingRight property.
 * @property pt1 To set the paddingTop property to paddingTop level 1.
 * @property pt2 To set the paddingTop property to paddingTop level 2.
 * @property pt3 To set the paddingTop property to paddingTop level 3.
 * @property pt4 To set the paddingTop property to paddingTop level 4.
 * @property pt5 To set the paddingTop property to paddingTop level 5.
 * @property pt6 To set the paddingTop property to paddingTop level 6.
 * @property pt7 To set the paddingTop property to paddingTop level 7.
 * @property pt8 To set the paddingTop property to paddingTop level 8.
 * @property paddingTop To set the paddingTop property.
 * @property pb1 To set the paddingBottom property to paddingBottom level 1.
 * @property pb2 To set the paddingBottom property to paddingBottom level 2.
 * @property pb3 To set the paddingBottom property to paddingBottom level 3.
 * @property pb4 To set the paddingBottom property to paddingBottom level 4.
 * @property pb5 To set the paddingBottom property to paddingBottom level 5.
 * @property pb6 To set the paddingBottom property to paddingBottom level 6.
 * @property pb7 To set the paddingBottom property to paddingBottom level 7.
 * @property pb8 To set the paddingBottom property to paddingBottom level 8.
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
 *
 * @returns {React.FunctionComponent}
 */
declare function laryfy<componentPropsType>(component: ComponentType<unknown>): (props?: componentPropsType & themePropsType) => JSX.Element;
export default laryfy;
