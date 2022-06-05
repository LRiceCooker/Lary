import ThemeContextType from '../../../../types/provider/themeContextType';
import color from './color';
import shape from './shape';
import spacing from './spacing';
import layout from './layout';
import position from './position';
import typography from './typography';

const defaultStyles = (baseConfuguration: ThemeContextType) => {
  return {
    ...color(baseConfuguration.color),
    ...shape(baseConfuguration.shape),
    ...spacing(baseConfuguration.spacing),
    ...layout(baseConfuguration.layout),
    ...position(baseConfuguration.position),
    ...typography(baseConfuguration.typography)
  };
};

export default defaultStyles;
