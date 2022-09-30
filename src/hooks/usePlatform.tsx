import { Platform } from 'react-native';

const usePlateform = (): Array<boolean> => {
  const isWeb = Platform.OS == 'web';
  const isAndroid = Platform.OS == 'android';
  const isIos = Platform.OS == 'ios';
  return [isWeb, isAndroid, isIos];
};

export default usePlateform;
