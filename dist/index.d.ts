/// <reference types="react" />
import { ComponentType } from 'react';
import { Sx, SxProp } from 'dripsy';

interface LaryProviderPropsType {
    children: JSX.Element;
    shape?: {
        BORDER_RADIUS: {
            '1': number;
            '2': number;
            '3': number;
            '4': number;
            '5': number;
            '6': number;
            '7': number;
            '8': number;
        };
        BORDER_WIDTH: {
            '1': number;
            '2': number;
            '3': number;
            '4': number;
            '5': number;
            '6': number;
            '7': number;
            '8': number;
        };
        PADDING: {
            '1': number | string;
            '2': number | string;
            '3': number | string;
            '4': number | string;
            '5': number | string;
            '6': number | string;
            '7': number | string;
            '8': number | string;
        };
    };
    layout?: {
        FLEX: {
            '1': number;
            '2': number;
            '3': number;
            '4': number;
            '5': number;
            '6': number;
            '7': number;
            '8': number;
        };
        FLEX_BASIS: {
            '1': string | number;
            '2': string | number;
            '3': string | number;
            '4': string | number;
            '5': string | number;
            '6': string | number;
            '7': string | number;
            '8': string | number;
        };
    };
    position?: {
        '1': string | number;
        '2': string | number;
        '3': string | number;
        '4': string | number;
        '5': string | number;
        '6': string | number;
        '7': string | number;
        '8': string | number;
    };
    spacing?: {
        '1': string | number;
        '2': string | number;
        '3': string | number;
        '4': string | number;
        '5': string | number;
        '6': string | number;
        '7': string | number;
        '8': string | number;
    };
    color?: {
        PRIMARY: string;
        SECONDARY: string;
        SUCCESS: string;
        DANGER: string;
        WARNING: string;
        INFO: string;
        LIGHT: string;
        DARK: string;
        WHITE: string;
        MUTED: string;
    };
}

/**
 * @function LaryProvider
 *
 * @param props : LaryProviderPropsType
 *
 *
 * @description It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * const MainProvider = ({ children }: { children: JSX.Element }) => {
 *    return (
 *        <LaryProvider color={{...YOUR_COLOR_CONFIGURATION}}>
 *            {children}
 *        </LaryProvider>
 *    )
 * }
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 * @exemple There is an exemple of the color configuration file ⤵️
 * ```javascript
 * const COLOR = {
 *     PRIMARY : '#5B4FF7',
 *     SECONDARY: '#C4C4C4',
 *     SUCCESS: '#4CD964',
 *     DANGER: '#FF3B30',
 *     WARNING: '#FF9500',
 *     INFO: '#5B4FF7',
 *     LIGHT: '#F3F3F3',
 *     DARK: '#212121',
 *     WHITE: '#FFFFFF',
 *     MUTED: '#313131',
 * }
 *
 * export default COLOR
 * ```
 * @exemple There is an exemple of the layout configuration file ⤵️
 *```javascript
 * const LAYOUT = {
 *   FLEX : {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 3,
 *       '4' : 4,
 *       '5' : 5,
 *       '6' : 6,
 *       '7' : 7,
 *       '8' : 8,
 *   },
 *   FLEX_BASIS : {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   }
 * }
 *
 * export default LAYOUT
 * ```
 * @exemple There is an exemple of the shape configuration file ⤵️
 * ```javascript
 * const SHAPE = {
 *   BORDER_RADIUS: {
 *       '1' : 5,
 *       '2' : 10,
 *       '3' : 15,
 *       '4' : 20,
 *       '5' : 25,
 *       '6' : 30,
 *       '7' : 35,
 *       '8' : 40,
 *   },
 *   BORDER_WIDTH: {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 4,
 *       '4' : 5,
 *       '5' : 8,
 *       '6' : 10,
 *       '7' : 12,
 *       '8' : 14,
 *   },
 *   PADDING: {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   },
 * }
 *
 * export default SHAPE;
 * ```
 * @exemple There is an exemple of the spacing configuration file ⤵️
 * ```javascript
 * const SPACING = {
 *      '1' : '1%',
 *      '2' : '2%',
 *      '3' : '3%',
 *      '4' : '4%',
 *      '5' : '5%',
 *      '6' : '6%',
 *      '7' : '7%',
 *      '8' : '8%',
 *  }
 *
 *  export default SPACING
 * ```
 * @exemple There is an exemple of the position configuration file ⤵️
 * ```javascript
 * const POSITION = {
 *     '1': '1%',
 *     '2': '2%',
 *     '3': '3%',
 *     '4': '4%',
 *     '5': '5%',
 *     '6': '6%',
 *     '7': '7%',
 *     '8': '8%',
 *  }
 *
 *  export default POSITION
 * ```
 *
 * @property color To overload colors theme configuration.
 * @property layout To overload layout theme configuration.
 * @property shape To overload shape theme configuration.
 * @property spacing To overload spacing theme configuration.
 * @property positions To overload positions theme configuration.
 *
 * @returns {JSX.Element}
 */
declare const LaryProvider: (props: LaryProviderPropsType) => JSX.Element;

interface colorPropsType {
    bdInfo?: boolean;
    bgInfo?: boolean;
    inInfo?: boolean;
    bdWarning?: boolean;
    bgWarning?: boolean;
    inWarning?: boolean;
    bdPrimary?: boolean;
    bgPrimary?: boolean;
    inPrimary?: boolean;
    bdSecondary?: boolean;
    bgSecondary?: boolean;
    inSecondary?: boolean;
    bdLight?: boolean;
    bgLight?: boolean;
    inLight?: boolean;
    bdDark?: boolean;
    bgDark?: boolean;
    inDark?: boolean;
    bdMuted?: boolean;
    bgMuted?: boolean;
    inMuted?: boolean;
    bdDanger?: boolean;
    bgDanger?: boolean;
    inDanger?: boolean;
    bdSuccess?: boolean;
    bgSuccess?: boolean;
    inSuccess?: boolean;
    bdWhite?: boolean;
    bgWhite?: boolean;
    inWhite?: boolean;
    backgroundColor?: Sx['backgroundColor'];
    borderColor?: Sx['borderColor'];
    color?: Sx['color'];
}

interface spacingPropsType {
    m1?: boolean;
    m2?: boolean;
    m3?: boolean;
    m4?: boolean;
    m5?: boolean;
    m6?: boolean;
    m7?: boolean;
    m8?: boolean;
    mr1?: boolean;
    mr2?: boolean;
    mr3?: boolean;
    mr4?: boolean;
    mr5?: boolean;
    mr6?: boolean;
    mr7?: boolean;
    mr8?: boolean;
    ml1?: boolean;
    ml2?: boolean;
    ml3?: boolean;
    ml4?: boolean;
    ml5?: boolean;
    ml6?: boolean;
    ml7?: boolean;
    ml8?: boolean;
    mt1?: boolean;
    mt2?: boolean;
    mt3?: boolean;
    mt4?: boolean;
    mt5?: boolean;
    mt6?: boolean;
    mt7?: boolean;
    mt8?: boolean;
    mb1?: boolean;
    mb2?: boolean;
    mb3?: boolean;
    mb4?: boolean;
    mb5?: boolean;
    mb6?: boolean;
    mb7?: boolean;
    mb8?: boolean;
    margin?: Sx['margin'];
    marginRight?: Sx['marginRight'];
    marginLeft?: Sx['marginLeft'];
    marginTop?: Sx['marginTop'];
    marginBottom?: Sx['marginBottom'];
    marginX?: Sx['marginX'];
    marginY?: Sx['marginY'];
}

interface shapePropsType {
    r1?: boolean;
    r2?: boolean;
    r3?: boolean;
    r4?: boolean;
    r5?: boolean;
    r6?: boolean;
    r7?: boolean;
    r8?: boolean;
    p1?: boolean;
    p2?: boolean;
    p3?: boolean;
    p4?: boolean;
    p5?: boolean;
    p6?: boolean;
    p7?: boolean;
    p8?: boolean;
    pr1?: boolean;
    pr2?: boolean;
    pr3?: boolean;
    pr4?: boolean;
    pr5?: boolean;
    pr6?: boolean;
    pr7?: boolean;
    pr8?: boolean;
    pl1?: boolean;
    pl2?: boolean;
    pl3?: boolean;
    pl4?: boolean;
    pl5?: boolean;
    pl6?: boolean;
    pl7?: boolean;
    pl8?: boolean;
    pt1?: boolean;
    pt2?: boolean;
    pt3?: boolean;
    pt4?: boolean;
    pt5?: boolean;
    pt6?: boolean;
    pt7?: boolean;
    pt8?: boolean;
    pb1?: boolean;
    pb2?: boolean;
    pb3?: boolean;
    pb4?: boolean;
    pb5?: boolean;
    pb6?: boolean;
    pb7?: boolean;
    pb8?: boolean;
    b1?: boolean;
    b2?: boolean;
    b3?: boolean;
    b4?: boolean;
    b5?: boolean;
    b6?: boolean;
    b7?: boolean;
    b8?: boolean;
    widthFull?: boolean;
    heightFull?: boolean;
    widthScreen?: boolean;
    heightScreen?: boolean;
    width?: Sx['width'];
    height?: Sx['height'];
    padding?: Sx['padding'];
    paddingLeft?: Sx['paddingLeft'];
    paddingRight?: Sx['paddingRight'];
    paddingX?: Sx['paddingX'];
    paddingY?: Sx['paddingY'];
    borderRadius?: Sx['borderRadius'];
    borderEndEndRadius?: Sx['borderEndEndRadius'];
    borderTopLeftRadius?: Sx['borderTopLeftRadius'];
    borderEndStartRadius?: Sx['borderEndStartRadius'];
    borderStartEndRadius?: Sx['borderStartEndRadius'];
    borderTopRightRadius?: Sx['borderTopRightRadius'];
    borderBottomLeftRadius?: Sx['borderBottomLeftRadius'];
    borderStartStartRadius?: Sx['borderStartStartRadius'];
    borderBottomRightRadius?: Sx['borderBottomRightRadius'];
    borderWidth?: Sx['borderWidth'];
    borderTopWidth?: Sx['borderTopWidth'];
    borderLeftWidth?: Sx['borderLeftWidth'];
    borderRightWidth?: Sx['borderRightWidth'];
    borderBottomWidth?: Sx['borderBottomWidth'];
}

interface layoutPropsType {
    alignCenter?: boolean;
    alignLeft?: boolean;
    alignRight?: boolean;
    xl?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
    f1?: boolean;
    f2?: boolean;
    f3?: boolean;
    f4?: boolean;
    f5?: boolean;
    f6?: boolean;
    f7?: boolean;
    f8?: boolean;
    fn?: boolean;
    fb1?: boolean;
    fb2?: boolean;
    fb3?: boolean;
    fb4?: boolean;
    fb5?: boolean;
    fb6?: boolean;
    fb7?: boolean;
    fb8?: boolean;
    fbFull?: boolean;
    flexBasis?: Sx['flexBasis'];
    flex?: Sx['flex'];
}

interface positionPropsType {
    relative?: boolean;
    absolute?: boolean;
    top1?: boolean;
    top2?: boolean;
    top3?: boolean;
    top4?: boolean;
    top5?: boolean;
    top6?: boolean;
    top7?: boolean;
    top8?: boolean;
    bottom1?: boolean;
    bottom2?: boolean;
    bottom3?: boolean;
    bottom4?: boolean;
    bottom5?: boolean;
    bottom6?: boolean;
    bottom7?: boolean;
    bottom8?: boolean;
    left1?: boolean;
    left2?: boolean;
    left3?: boolean;
    left4?: boolean;
    left5?: boolean;
    left6?: boolean;
    left7?: boolean;
    left8?: boolean;
    right1?: boolean;
    right2?: boolean;
    right3?: boolean;
    right4?: boolean;
    right5?: boolean;
    right6?: boolean;
    right7?: boolean;
    right8?: boolean;
    right?: Sx['right'];
    left?: Sx['left'];
    bottom?: Sx['bottom'];
    top?: Sx['top'];
}

interface typographyPropsType {
    bold?: Boolean;
    textCenter?: Boolean;
    textLeft?: Boolean;
    textRight?: Boolean;
}

interface themePropsType extends colorPropsType, spacingPropsType, shapePropsType, layoutPropsType, positionPropsType, typographyPropsType {
    style?: SxProp;
}

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
 * @property textCenter To set the textAlign property to center.
 * @property textRight To set the textAlign property to right.
 * @property textLeft To set the textAlign property to left.
 *
 * @returns {React.FunctionComponent}
 */
declare function laryfy<componentPropsType>(component: ComponentType<unknown>): (props?: componentPropsType & themePropsType) => JSX.Element;

interface containerPropsType extends themePropsType {
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

interface elementPropsType extends themePropsType {
    children?: JSX.Element | JSX.Element[];
}

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

export { Container, Element, LaryProvider, laryfy };
