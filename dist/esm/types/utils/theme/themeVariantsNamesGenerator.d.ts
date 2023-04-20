import { themePropsType } from '../../types/theme';
import { View } from 'dripsy';
declare const themeVariantsNamesGenerator: (props: themePropsType) => React.ComponentProps<typeof View>['variants'];
export default themeVariantsNamesGenerator;
