import generalVariants from './default';
import components from './components';
import ThemeContextType from '../../../types/provider/themeContextType';

const variants = (baseConfuguration: ThemeContextType) => {
  return {
    layout: generalVariants(baseConfuguration),
    ...components
  };
};

export default variants;
