import { themePropsType } from '../../types/theme';
import theme from '../../style/theme/theme';
import { View } from 'dripsy';
import { nonStyleProps, baseConfiguration, stylesPropsToInject } from '../../const';

const themeVariantsNamesGenerator = (
  props: themePropsType
): React.ComponentProps<typeof View>['variants'] => {
  const themeKeys = Object.keys(theme(baseConfiguration));
  return Object.keys(props)
    .filter(
      (prop) =>
        ([] as string[]).concat(nonStyleProps).concat(stylesPropsToInject).indexOf(prop) === -1
    )
    .map((prop) =>
      themeKeys.indexOf(prop) !== -1 ? prop : `layout.${prop}`
    ) as unknown as React.ComponentProps<typeof View>['variants'];
};

export default themeVariantsNamesGenerator;
