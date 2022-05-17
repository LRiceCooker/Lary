import theme from '../../style/theme/theme';
import nonStyleProps from '../../const/nonStyleProps';
import stylesPropsToInject from '../../const/stylesPropsToInject';

const propsInjector = <PropsType, ComponentPropsType>(props: PropsType): ComponentPropsType => {
  const propsToInject = {} as ComponentPropsType;

  // @ts-expect-error - layout is not undefined in the theme
  const themePropsNames = Object.keys(theme.layout)
    .concat(nonStyleProps)
    .concat(stylesPropsToInject);

  Object.keys(props).forEach((key) => {
    // @ts-expect-error - we know that key is a string
    if (themePropsNames.indexOf(key) === -1) propsToInject[key] = props[key];
  });

  return propsToInject;
};

export default propsInjector;
