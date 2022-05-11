import React from "react"
import { Provider as PaperProvider } from 'react-native-paper';
import {DripsyProvider} from 'dripsy'
import LaryProviderPropsType from "../types/provider/LaryProviderPropsType";
import themeOverLoader from "../utils/helpers/themeOverLoader";

/**
 * @function LaryProvider
 * 
 * @param props : LaryProviderPropsType
 * 
 * 
 * @description It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :
 * 
 * @exemple How to use it ⤵️
 * ```javascript
 * const MainProvider = ({ children }: { children: JSX.Element }) => {
 *    return (
 *        <LaryProvider color={{...YOUR_COLOR_CONFIGURATION}}>
 *            {children}
 *        </LaryProvider>
 *    )
 * }
 * ```
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @exemple There is an exemple of the color configuration file ⤵️
 * ```javascript
 * const COLOR = {
 *     PRIMARY : '#5B4FF7',
 *     SECONDARY: '#C4C4C4',
 *     SUCCESS: '#4CD964',
 *     DANGER: '#FF3B30',
 *     WARNING: '#FF9500',
 *     INFO: '#5B4FF7',
 *     LIGHT: '#F3F3F3',
 *     DARK: '#212121',
 *     WHITE: '#FFFFFF',
 *     MUTED: '#313131',
 * }
 *
 * export default COLOR
 * ```
 * @exemple There is an exemple of the layout configuration file ⤵️ 
 *```javascript
 * const LAYOUT = {
 *   FLEX : {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 3,
 *       '4' : 4,
 *       '5' : 5,
 *       '6' : 6,
 *       '7' : 7,
 *       '8' : 8,
 *   },
 *   FLEX_BASIS : {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   }
 * }
 * 
 * export default LAYOUT
 * ```
 * @exemple There is an exemple of the shape configuration file ⤵️ 
 * ```javascript
 * const SHAPE = {
 *   BORDER_RADIUS: {
 *       '1' : 5,
 *       '2' : 10,
 *       '3' : 15,
 *       '4' : 20,
 *       '5' : 25,
 *       '6' : 30,
 *       '7' : 35,
 *       '8' : 40,
 *   },
 *   BORDER_WIDTH: {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 4,
 *       '4' : 5,
 *       '5' : 8,
 *       '6' : 10,
 *       '7' : 12,
 *       '8' : 14,
 *   },
 *   PADDING: {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   },
 * }
 * 
 * export default SHAPE;
 * ```
 * @exemple There is an exemple of the spacing configuration file ⤵️ 
 * ```javascript
 * const SPACING = {
 *      '1' : '1%',
 *      '2' : '2%',
 *      '3' : '3%',
 *      '4' : '4%',
 *      '5' : '5%',
 *      '6' : '6%',
 *      '7' : '7%',
 *      '8' : '8%',
 *  }
 * 
 *  export default SPACING
 * ```
 * @exemple There is an exemple of the position configuration file ⤵️
 * ```javascript
 * const POSITION = {
 *     '1': '1%',
 *     '2': '2%',
 *     '3': '3%',
 *     '4': '4%',
 *     '5': '5%',
 *     '6': '6%',
 *     '7': '7%',
 *     '8': '8%',
 *  }
 *
 *  export default POSITION
 * ```
 * 
 * @property color To overload colors theme configuration.
 * @property layout To overload layout theme configuration. 
 * @property shape To overload shape theme configuration.
 * @property spacing To overload spacing theme configuration.
 * @property positions To overload positions theme configuration.
 * 
 * @returns {JSX.Element}
 */

const LaryProvider = (props: LaryProviderPropsType) => {
    return (
        <DripsyProvider theme={themeOverLoader(props) as unknown}>
            <PaperProvider>
                {props.children}
            </PaperProvider>
        </DripsyProvider>
    )
}
export default LaryProvider;