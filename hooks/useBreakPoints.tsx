import { useMediaQuery } from 'native-base';

import { responsiveWidth } from "../utils/helpers/pixelConverter";

const useBreakPoints = () : Array<Boolean> => {
    const [isXl] = useMediaQuery({minWidth: responsiveWidth(1280)})
    const [isLg] = useMediaQuery({minWidth: responsiveWidth(1024), maxWidth: responsiveWidth(1279)})
    const [isMd] = useMediaQuery({minWidth: responsiveWidth(768), maxWidth: responsiveWidth(1023)})
    const [isSm] = useMediaQuery({maxWidth: responsiveWidth(640)})
    return [isXl, isLg, isMd, isSm]
}

export default useBreakPoints