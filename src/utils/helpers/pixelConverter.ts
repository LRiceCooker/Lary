import { PixelRatio, Platform } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const responsiveHeight = (nbr: number): number => {
  return Platform.OS === 'web'
    ? (nbr *
        Math.max(Dimensions.get('window').width, Dimensions.get('window').height) *
        PixelRatio.get()) /
        height
    : nbr;
};
export const responsiveWidth = (nbr: number): number => {
  return Platform.OS === 'web'
    ? (nbr *
        Math.min(Dimensions.get('window').width, Dimensions.get('window').height) *
        PixelRatio.get()) /
        width
    : nbr;
};
