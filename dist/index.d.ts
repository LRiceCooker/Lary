/// <reference types="react" />
import { Sx, SxProp } from 'dripsy';
import { ComponentProps } from 'react';

interface ThemeContextType {
    color: {
        PRIMARY?: string;
        SECONDARY?: string;
        SUCCESS?: string;
        DANGER?: string;
        WARNING?: string;
        INFO?: string;
        LIGHT?: string;
        DARK?: string;
        WHITE?: string;
        MUTED?: string;
    };
    layout: {
        FLEX: {
            '1'?: number;
            '2'?: number;
            '3'?: number;
            '4'?: number;
            '5'?: number;
            '6'?: number;
            '7'?: number;
            '8'?: number;
        };
        FLEX_BASIS: {
            '1'?: string | number;
            '2'?: string | number;
            '3'?: string | number;
            '4'?: string | number;
            '5'?: string | number;
            '6'?: string | number;
            '7'?: string | number;
            '8'?: string | number;
        };
    };
    position: {
        '1'?: string | number;
        '2'?: string | number;
        '3'?: string | number;
        '4'?: string | number;
        '5'?: string | number;
        '6'?: string | number;
        '7'?: string | number;
        '8'?: string | number;
    };
    shape: {
        BORDER_RADIUS?: {
            '1'?: number;
            '2'?: number;
            '3'?: number;
            '4'?: number;
            '5'?: number;
            '6'?: number;
            '7'?: number;
            '8'?: number;
        };
        BORDER_WIDTH?: {
            '1'?: number;
            '2'?: number;
            '3'?: number;
            '4'?: number;
            '5'?: number;
            '6'?: number;
            '7'?: number;
            '8'?: number;
        };
        PADDING?: {
            '1'?: number | string;
            '2'?: number | string;
            '3'?: number | string;
            '4'?: number | string;
            '5'?: number | string;
            '6'?: number | string;
            '7'?: number | string;
            '8'?: number | string;
        };
    };
    spacing: {
        '1'?: string | number;
        '2'?: string | number;
        '3'?: string | number;
        '4'?: string | number;
        '5'?: string | number;
        '6'?: string | number;
        '7'?: string | number;
        '8'?: string | number;
    };
    typography: {
        xs?: number;
        sm?: number;
        base?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
        '3xl'?: number;
        '4xl'?: number;
        '5xl': number;
        '6xl': number;
        '7xl': number;
        '8xl': number;
        '9xl': number;
    };
}

interface LaryProviderPropsType {
    children: JSX.Element;
    color?: ThemeContextType['color'];
    layout?: ThemeContextType['layout'];
    position?: ThemeContextType['position'];
    shape?: ThemeContextType['shape'];
    typography?: ThemeContextType['typography'];
    spacing?: ThemeContextType['spacing'];
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
    maxWidth?: Sx['maxWidth'];
    minWidth?: Sx['minWidth'];
    maxHeight?: Sx['maxHeight'];
    minHeight?: Sx['maxHeight'];
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
    alignEnd?: boolean;
    alignStart?: boolean;
    justifyCenter?: boolean;
    justifyEnd?: boolean;
    justifyStart?: boolean;
    justifyBetween?: boolean;
    justifyAround?: boolean;
    justifyEvenly?: boolean;
    xl?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
    android?: boolean;
    ios?: boolean;
    web?: boolean;
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
    avoiding?: boolean;
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
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    textXs?: boolean;
    textSm?: boolean;
    textBase?: boolean;
    textLg?: boolean;
    textXl?: boolean;
    text2xl?: boolean;
    text3xl?: boolean;
    text4xl?: boolean;
    text5xl?: boolean;
    text6xl?: boolean;
    text7xl?: boolean;
    text8xl?: boolean;
    text9xl?: boolean;
    textCenter?: boolean;
    textLeft?: boolean;
    textRight?: boolean;
    fontFamily?: Sx['fontFamily'];
}

interface themePropsType extends colorPropsType, spacingPropsType, shapePropsType, layoutPropsType, positionPropsType, typographyPropsType {
    style?: SxProp;
}

type componentPropsType<componentType> = ComponentProps<componentType & keyof JSX.IntrinsicElements>;

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
 * @property minWidth To set minimum width property.
 * @property maxWidth To set maximum width property.
 * @property minHeight To set minimum height property.
 * @property maxHeight To set maximum height property.
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
 * @property fontFamily To set the font.
 *
 * @returns {React.FunctionComponent}
 */
declare function laryfy<passedComponentType>(component: passedComponentType): (props?: componentPropsType<passedComponentType> & themePropsType) => JSX.Element;

declare const responsiveHeight: (nbr: number) => number;
declare const responsiveWidth: (nbr: number) => number;

declare const useBreakPoints: () => {
    isXl: boolean;
    isLg: boolean;
    isMd: boolean;
    isSm: boolean;
};

declare const usePrimary: (gradientValue: number) => any;
declare const useSecondary: (gradientValue: number) => any;
declare const useSuccess: (gradientValue: number) => any;
declare const useDanger: (gradientValue: number) => any;
declare const useWarning: (gradientValue: number) => any;
declare const useInfo: (gradientValue: number) => any;
declare const useLight: (gradientValue: number) => any;
declare const useDark: (gradientValue: number) => any;
declare const useWhite: (gradientValue: number) => any;
declare const useMuted: (gradientValue: number) => any;

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

export { Container, Element, LaryProvider, laryfy, responsiveHeight, responsiveWidth, useBreakPoints, useDanger, useDark, useInfo, useLight, useMuted, usePrimary, useSecondary, useSuccess, useWarning, useWhite };
