import theme from '../../style/theme/theme'
import nonStyleProps from '../../const/nonStyleProps'
import stylesPropsToInject from '../../const/stylesPropsToInject'

const propsInjector = <PropsType, ComponentPropsType>(props: PropsType) : ComponentPropsType => {
    let propsToInject = {} as ComponentPropsType

    const themePropsNames = Object.keys(theme.layout).concat(nonStyleProps).concat(stylesPropsToInject)

    Object.keys(props).forEach(key => {
        if(themePropsNames.indexOf(key) === -1) propsToInject[key] = props[key]
    })

    return propsToInject
}

export default propsInjector