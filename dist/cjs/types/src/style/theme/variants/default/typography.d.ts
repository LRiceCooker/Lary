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
        fontSize: string | number | undefined;
    };
    textSm: {
        fontSize: string | number | undefined;
    };
    textBase: {
        fontSize: string | number | undefined;
    };
    textLg: {
        fontSize: string | number | undefined;
    };
    textXl: {
        fontSize: string | number | undefined;
    };
    text2xl: {
        fontSize: string | number | undefined;
    };
    text3xl: {
        fontSize: string | number | undefined;
    };
    text4xl: {
        fontSize: string | number | undefined;
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
