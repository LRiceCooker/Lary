import theme from '../../style/theme/theme';
import nonStyleProps from '../../const/nonStyleProps';
import stylesPropsToInject from '../../const/stylesPropsToInject';
import baseConfiguration from '../../const/baseConfiguration';

const propsInjector = <ComponentPropsType>(props: ComponentPropsType): ComponentPropsType => {
  const propsToInject = {} as ComponentPropsType;

  const themePropsNames = Object.keys(theme(baseConfiguration).layout)
    .concat(nonStyleProps)
    .concat(stylesPropsToInject);

  Object.keys(props as ComponentPropsType & object).forEach((key) => {
    // @ts-expect-error - we know that key is a string
    if (themePropsNames.indexOf(key) === -1) propsToInject[key] = props[key];
  });

  return propsToInject;
};

export default propsInjector;
