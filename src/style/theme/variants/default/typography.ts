import FONT_SIZE from '../../typographyPalette';
import ThemeContextType from '../../../../types/provider/themeContextType';

const typography = (TYPOGRAPHY_PALETTE: ThemeContextType['typography']) => {
  return {
    bold: {
      fontWeight: 'bold'
    },
    italic: {
      fontStyle: 'italic'
    },
    underline: {
      textDecorationLine: 'underline'
    },
    textXs: {
      fontSize: TYPOGRAPHY_PALETTE['xs']
    },
    textSm: {
      fontSize: TYPOGRAPHY_PALETTE['sm']
    },
    textBase: {
      fontSize: TYPOGRAPHY_PALETTE['base']
    },
    textLg: {
      fontSize: TYPOGRAPHY_PALETTE['lg']
    },
    textXl: {
      fontSize: TYPOGRAPHY_PALETTE['xl']
    },
    text2xl: {
      fontSize: TYPOGRAPHY_PALETTE['2xl']
    },
    text3xl: {
      fontSize: TYPOGRAPHY_PALETTE['3xl']
    },
    text4xl: {
      fontSize: TYPOGRAPHY_PALETTE['4xl']
    },
    textCenter: {
      textAlign: 'center'
    },
    textLeft: {
      textAlign: 'left'
    },
    textRight: {
      textAlign: 'right'
    }
  };
};

export default typography;
