import { SxProp } from 'dripsy';
import { stylesPropsToInject } from '../../const';
import { themePropsType } from '../../types/theme';

const styleSheetCompiler = (props: themePropsType): SxProp => {
  const styles = { ...props.style };
  for (const propsToInject of stylesPropsToInject) {
    // @ts-expect-error - we know that key is a string and we are sure that it is in the theme
    if (propsToInject !== 'style') styles[propsToInject] = props[propsToInject];
  }
  return styles;
};

export default styleSheetCompiler;
