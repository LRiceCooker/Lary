import { makeTheme } from 'dripsy';
import cssType from '@theme-ui/css/node_modules/csstype';
import ThemeContextType from '../../types/provider/themeContextType';
import variants from './variants';

const genereateTheme = (baseConfuguration: ThemeContextType) => {
  return makeTheme<typeof cssType>(variants(baseConfuguration));
};

export default genereateTheme;
