import ThemeContextType from '../../../../types/provider/themeContextType';
declare const typography: (TYPOGRAPHY_PALETTE: ThemeContextType['typography']) => {
    bold: {
        fontWeight: string;
    };
    italic: {
        fontStyle: string;
    };
    underline: {
        textDecorationLine: string;
    };
    textXs: {
        fontSize: number | undefined;
    };
    textSm: {
        fontSize: number | undefined;
    };
    textBase: {
        fontSize: number | undefined;
    };
    textLg: {
        fontSize: number | undefined;
    };
    textXl: {
        fontSize: number | undefined;
    };
    text2xl: {
        fontSize: number | undefined;
    };
    text3xl: {
        fontSize: number | undefined;
    };
    text4xl: {
        fontSize: number | undefined;
    };
    text5xl: {
        fontSize: number;
    };
    text6xl: {
        fontSize: number;
    };
    text7xl: {
        fontSize: number;
    };
    text8xl: {
        fontSize: number;
    };
    text9xl: {
        fontSize: number;
    };
    textCenter: {
        textAlign: string;
    };
    textLeft: {
        textAlign: string;
    };
    textRight: {
        textAlign: string;
    };
};
export default typography;
