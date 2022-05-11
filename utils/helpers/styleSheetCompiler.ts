import {SxProp} from 'dripsy'
import consts from '../../const'
import { themePropsType } from '../../types/theme'

const styleSheetCompiler = (props: themePropsType) : SxProp  => {
    let styles = {...props.style}
    for(const propsToInject of consts.stylesPropsToInject){
        if(propsToInject !== 'style') styles[propsToInject] = props[propsToInject]
    }
    return styles
}

export default styleSheetCompiler