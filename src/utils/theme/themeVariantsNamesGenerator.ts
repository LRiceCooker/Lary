import { themePropsType } from '../../types/theme'
import theme from '../../style/theme/theme'
import { View } from 'dripsy'
import consts from '../../const'

const themeVariantsNamesGenerator = (props : themePropsType) : React.ComponentProps<typeof View>['variants'] => {
    const themeKeys = Object.keys(theme)
    return Object.keys(props).filter(prop => [].concat(consts.nonStyleProps).concat(consts.stylesPropsToInject).indexOf(prop) === -1 ).map(prop => themeKeys.indexOf(prop) !== -1 ? prop : `layout.${prop}` ) as unknown as React.ComponentProps<typeof View>['variants']
}

export default themeVariantsNamesGenerator