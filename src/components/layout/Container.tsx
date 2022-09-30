import React from 'react';
import { View } from 'dripsy';

import containerPropsType from '../../types/layout/containerPropsType';
import themeVariantsNamesGenerator from '../../utils/theme/themeVariantsNamesGenerator';
import Media from '../media/Media';
import Style from '../style/Style';
import Avoiding from '../style/Avoiding';

/**
 * @function Container
 *
 * @param props : containerPropsType
 *
 * @description Takes all Lary props and add to them the container props:
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Container row contentCenter m8 r8 p4>
 *     {children}
 * </Container>
 * ```
 * @property row it's mean flexDirection: "row"
 * @property column it's mean flexDirection: "column"
 * @property wrap it's mean flexWrap: "wrap"
 * @property nowrap it's mean flexWrap: "nowrap"
 * @property contentCenter it's mean justifyContent: "center"
 * @property contentLeft it's mean justifyContent: "flex-start"
 * @property contentRight it's mean justifyContent: "flex-end"
 *
 *
 * @returns {JSX.Element}
 */

const Container = (props: containerPropsType) => {
  const styles: React.ComponentProps<typeof View>['variants'] = themeVariantsNamesGenerator(props);

  return (
    <Media passedProps={props}>
      <Avoiding passedProps={props}>
        <Style style={props.style}>
          <View variants={styles}>{props.children}</View>
        </Style>
      </Avoiding>
    </Media>
  );
};

export default Container;
