import _ from 'lodash-es';
import ThemeContextType from '../../types/provider/themeContextType';
import ThemeProviderPropsType from '../../types/provider/themeProviderPropsType';
import baseConfiguration from '../../const/baseConfiguration';

const themeOverLoader = (props: ThemeProviderPropsType): ThemeContextType => {
  const baseTheme: ThemeProviderPropsType = {
    children: props.children,
    ...baseConfiguration
  };
  return _.merge(baseTheme, props) as ThemeContextType;
};

export default themeOverLoader;
