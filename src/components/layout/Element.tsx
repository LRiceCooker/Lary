import React from 'react';
import { View } from 'dripsy';
import themeVariantsNamesGenerator from '../../utils/theme/themeVariantsNamesGenerator';
import Media from '../media/Media';
import Style from '../style/Style';
import elementPropsType from '../../types/layout/elementPropsType';
import styleSheetCompiler from '../../utils/helpers/styleSheetCompiler';

/**
 * @function Element
 *
 * @param props : elementPropsType
 *
 * @description Takes all Lary props, it's basicaly a View component, but with some extra props
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Element bgPrimary p5 m8>
 *      {children}
 * </Element>
 * ```
 *
 * @returns {JSX.Element}
 */

const Element = (props: elementPropsType) => {
  const styles: React.ComponentProps<typeof View>['variants'] = themeVariantsNamesGenerator(props);

  return (
    <Media passedProps={props}>
      <Style style={styleSheetCompiler(props)}>
        <View variants={styles}>{props.children}</View>
      </Style>
    </Media>
  );
};

export default Element;
