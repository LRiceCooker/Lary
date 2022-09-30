import React from 'react';
import { View } from 'dripsy';
import themeVariantsNamesGenerator from '../../utils/theme/themeVariantsNamesGenerator';
import Media from '../media/Media';
import Style from '../style/Style';
import elementPropsType from '../../types/layout/elementPropsType';
import styleSheetCompiler from '../../utils/helpers/styleSheetCompiler';
import Avoiding from '../style/Avoiding';
import Plateform from '../media/Platform';

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
      <Plateform passedProps={props}>
        <Avoiding passedProps={props}>
          <Style style={styleSheetCompiler(props)}>
            <View variants={styles}>{props.children}</View>
          </Style>
        </Avoiding>
      </Plateform>
    </Media>
  );
};

export default Element;
