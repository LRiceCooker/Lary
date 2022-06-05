import ThemeContextType from '../../../../types/provider/themeContextType';

const layout = (LAYOUT_PALETTE: ThemeContextType['layout']) => {
  return {
    alignCenter: {
      alignItems: 'center'
    },
    alignEnd: {
      alignItems: 'flex-end'
    },
    alignStart: {
      alignItems: 'flex-start'
    },
    justifyCenter: {
      justifyContent: 'center'
    },
    justifyEnd: {
      justifyContent: 'flex-end'
    },
    justifyStart: {
      justifyContent: 'flex-start'
    },
    justifyBetween: {
      justifyContent: 'space-between'
    },
    justifyAround: {
      justifyContent: 'space-around'
    },
    justifyEvenly: {
      justifyContent: 'space-around'
    },
    f1: {
      flex: LAYOUT_PALETTE!.FLEX[1]
    },
    f2: {
      flex: LAYOUT_PALETTE!.FLEX[2]
    },
    f3: {
      flex: LAYOUT_PALETTE!.FLEX[3]
    },
    f4: {
      flex: LAYOUT_PALETTE!.FLEX[4]
    },
    f5: {
      flex: LAYOUT_PALETTE!.FLEX[5]
    },
    f6: {
      flex: LAYOUT_PALETTE!.FLEX[6]
    },
    f7: {
      flex: LAYOUT_PALETTE!.FLEX[7]
    },
    f8: {
      flex: LAYOUT_PALETTE!.FLEX[8]
    },
    fb1: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[1]
    },
    fb2: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[2]
    },
    fb3: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[3]
    },
    fb4: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[4]
    },
    fb5: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[5]
    },
    fb6: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[6]
    },
    fb7: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[7]
    },
    fb8: {
      flexBasis: LAYOUT_PALETTE!.FLEX_BASIS[8]
    },
    fbFull: {
      flexBasis: '100%'
    },
    fn: {
      flex: 0
    }
  };
};

export default layout;
