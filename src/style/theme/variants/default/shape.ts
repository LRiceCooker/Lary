import { Dimensions, Platform } from 'react-native';
import ThemeContextType from '../../../../types/provider/themeContextType';

const shape = (SHAPE_PALETTE: ThemeContextType['shape']) => {
  return {
    r1: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![1]
    },
    r2: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![2]
    },
    r3: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![3]
    },
    r4: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![4]
    },
    r5: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![5]
    },
    r6: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![6]
    },
    r7: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![7]
    },
    r8: {
      borderRadius: SHAPE_PALETTE!.BORDER_RADIUS![8]
    },
    p1: {
      padding: SHAPE_PALETTE!.PADDING![1]
    },
    p2: {
      padding: SHAPE_PALETTE!.PADDING![2]
    },
    p3: {
      padding: SHAPE_PALETTE!.PADDING![3]
    },
    p4: {
      padding: SHAPE_PALETTE!.PADDING![4]
    },
    p5: {
      padding: SHAPE_PALETTE!.PADDING![5]
    },
    p6: {
      padding: SHAPE_PALETTE!.PADDING![6]
    },
    p7: {
      padding: SHAPE_PALETTE!.PADDING![7]
    },
    p8: {
      padding: SHAPE_PALETTE!.PADDING![8]
    },
    pr1: {
      paddingRight: SHAPE_PALETTE!.PADDING![1]
    },
    pr2: {
      paddingRight: SHAPE_PALETTE!.PADDING![2]
    },
    pr3: {
      paddingRight: SHAPE_PALETTE!.PADDING![3]
    },
    pr4: {
      paddingRight: SHAPE_PALETTE!.PADDING![4]
    },
    pr5: {
      paddingRight: SHAPE_PALETTE!.PADDING![5]
    },
    pr6: {
      paddingRight: SHAPE_PALETTE!.PADDING![6]
    },
    pr7: {
      paddingRight: SHAPE_PALETTE!.PADDING![7]
    },
    pr8: {
      paddingRight: SHAPE_PALETTE!.PADDING![8]
    },
    pl1: {
      paddingLeft: SHAPE_PALETTE!.PADDING![1]
    },
    pl2: {
      paddingLeft: SHAPE_PALETTE!.PADDING![2]
    },
    pl3: {
      paddingLeft: SHAPE_PALETTE!.PADDING![3]
    },
    pl4: {
      paddingLeft: SHAPE_PALETTE!.PADDING![4]
    },
    pl5: {
      paddingLeft: SHAPE_PALETTE!.PADDING![5]
    },
    pl6: {
      paddingLeft: SHAPE_PALETTE!.PADDING![6]
    },
    pl7: {
      paddingLeft: SHAPE_PALETTE!.PADDING![7]
    },
    pl8: {
      paddingLeft: SHAPE_PALETTE!.PADDING![8]
    },
    pt1: {
      paddingTop: SHAPE_PALETTE!.PADDING![1]
    },
    pt2: {
      paddingTop: SHAPE_PALETTE!.PADDING![2]
    },
    pt3: {
      paddingTop: SHAPE_PALETTE!.PADDING![3]
    },
    pt4: {
      paddingTop: SHAPE_PALETTE!.PADDING![4]
    },
    pt5: {
      paddingTop: SHAPE_PALETTE!.PADDING![5]
    },
    pt6: {
      paddingTop: SHAPE_PALETTE!.PADDING![6]
    },
    pt7: {
      paddingTop: SHAPE_PALETTE!.PADDING![7]
    },
    pt8: {
      paddingTop: SHAPE_PALETTE!.PADDING![8]
    },
    pb1: {
      paddingBottom: SHAPE_PALETTE!.PADDING![1]
    },
    pb2: {
      paddingBottom: SHAPE_PALETTE!.PADDING![2]
    },
    pb3: {
      paddingBottom: SHAPE_PALETTE!.PADDING![3]
    },
    pb4: {
      paddingBottom: SHAPE_PALETTE!.PADDING![4]
    },
    pb5: {
      paddingBottom: SHAPE_PALETTE!.PADDING![5]
    },
    pb6: {
      paddingBottom: SHAPE_PALETTE!.PADDING![6]
    },
    pb7: {
      paddingBottom: SHAPE_PALETTE!.PADDING![7]
    },
    pb8: {
      paddingBottom: SHAPE_PALETTE!.PADDING![8]
    },
    b1: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![1]
    },
    b2: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![2]
    },
    b3: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![3]
    },
    b4: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![4]
    },
    b5: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![5]
    },
    b6: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![6]
    },
    b7: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![7]
    },
    b8: {
      borderWidth: SHAPE_PALETTE!.BORDER_WIDTH![8]
    },
    widthFull: {
      width: '100%'
    },
    heightFull: {
      height: '100%'
    },
    widthScreen: {
      width: Dimensions.get('window').width
    },
    heightScreen: {
      height: Dimensions.get('window').height
    }
  };
};

export default shape;
