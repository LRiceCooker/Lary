import { makeTheme } from 'dripsy'
import LaryProviderPropsType from "../../types/provider/LaryProviderPropsType"
import shape from '../../style/theme/variants/default/shape'
import layout from '../../style/theme/variants/default/layout'
import color from "../../style/theme/variants/default/color"
import position from "../../style/theme/variants/default/position"
import spacing from "../../style/theme/variants/default/spacing"
import components from "../../style/theme/variants/components"
import theme  from '../../style/theme/theme'


const themeOverLoader = (laryProps: LaryProviderPropsType) => {
    let overLoadedShape = shape
    let overLoadedLayout = layout
    let overLoadedColor = color
    let overLoadedPosition = position
    let overLoadedSpacing = spacing

    if(laryProps.shape) {
        const overLoadedShapeKeys = Object.keys(overLoadedShape)
        for(const key of overLoadedShapeKeys) {
            const styleAttribute = Object.keys(overLoadedShape[key])[0]
            if(key.indexOf('r') === 0) overLoadedShape[key][styleAttribute] = laryProps.shape.BORDER_RADIUS[key.replace('r', '')]
            if(key.indexOf('p') === 0) overLoadedShape[key][styleAttribute] = laryProps.shape.PADDING[key.replace('p', '').replace('pr', '').replace('pl', '').replace('pb', '').replace('pt', '')]
            if(key.indexOf('b') === 0) overLoadedShape[key][styleAttribute] = laryProps.shape.BORDER_WIDTH[key.replace('b', '')]
        }
    }

    if(laryProps.layout) {
        const overLoadedLayoutKeys = Object.keys(overLoadedLayout)
        for(const key of overLoadedLayoutKeys) {
            const styleAttribute = Object.keys(overLoadedLayout[key])[0]
            if(key.indexOf('fb') === 0 && key.indexOf('full') === -1) overLoadedLayout[key][styleAttribute] = laryProps.layout.FLEX_BASIS[key.replace('fb', '')]
            else if(key.indexOf('f') === 0 && key.indexOf('full') === -1) overLoadedLayout[key][styleAttribute] = laryProps.layout.FLEX[key.replace('f', '')]
        }
    }

    if(laryProps.color) {
        const overLoadedColorKeys = Object.keys(color)
        for(const key of overLoadedColorKeys) {
            const styleAttribute = Object.keys(overLoadedColor[key])[0]
            if(key.indexOf('Info') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.INFO
            if(key.indexOf('Warning') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.WARNING
            if(key.indexOf('Primary') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.PRIMARY
            if(key.indexOf('Secondary') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.SECONDARY
            if(key.indexOf('Light') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.LIGHT
            if(key.indexOf('Dark') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.DARK
            if(key.indexOf('Muted') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.MUTED
            if(key.indexOf('White') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.WHITE
            if(key.indexOf('Danger') !== -1 ) overLoadedColor[key][styleAttribute] = laryProps.color.DANGER
        }
    }

    if(laryProps.position) {
        const overLoadedPositionKeys = Object.keys(overLoadedPosition)
        for(const key of overLoadedPositionKeys) {
            const styleAttribute = Object.keys(overLoadedPosition[key])[0]
            if(key.indexOf('top') === 0) overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('top', '')]
            if(key.indexOf('bottom') === 0) overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('bottom', '')]
            if(key.indexOf('left') === 0) overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('left', '')]
            if(key.indexOf('right') === 0) overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('right', '')]
        }
    }

    if(laryProps.spacing) {
        const overLoadedSpacingKeys = Object.keys(overLoadedSpacing)
        for(const key of overLoadedSpacingKeys) {
            const styleAttribute = Object.keys(overLoadedSpacing[key])[0]
            overLoadedSpacing[key][styleAttribute] = laryProps.spacing[key.replace('m', '').replace('mt', '').replace('mr', '').replace('mb', '').replace('ml', '')]
        }
    }

    if (laryProps.shape || laryProps.layout || laryProps.color || laryProps.position || laryProps.spacing) {
        const overLoadedVariants = {...components, layout:{...overLoadedShape, ...overLoadedLayout, ...overLoadedColor, ...overLoadedPosition, ...overLoadedSpacing}}
        return makeTheme(overLoadedVariants)
    }

    return theme
}

export default themeOverLoader