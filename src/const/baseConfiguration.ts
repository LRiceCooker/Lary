import ThemeContextType from '../types/provider/themeContextType';
import COLOR_PALETTE from '../style/theme/colorPalette';
import LAYOUT_PALETTE from '../style/theme/layoutPalette';
import POSITION_PALETTE from '../style/theme/positionPalette';
import SHAPE_PALETTE from '../style/theme/shapePalette';
import TYPOGRAPHY_PALETTE from '../style/theme/typographyPalette';
import SPACING_PALETTE from '../style/theme/spacingPalette';

const baseConfiguration: ThemeContextType = {
  color: COLOR_PALETTE,
  layout: LAYOUT_PALETTE,
  position: POSITION_PALETTE,
  shape: SHAPE_PALETTE,
  typography: TYPOGRAPHY_PALETTE,
  spacing: SPACING_PALETTE
};

export default baseConfiguration;
