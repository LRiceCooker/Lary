import { useThemeConfigurationContext } from '../providers/ThemeConfigurationProvider';

/* eslint-disable */
const Gradient = require('javascript-color-gradient');
/* eslint-enable */

export const usePrimary = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.PRIMARY;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.PRIMARY as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.PRIMARY;
};

export const useSecondary = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.SECONDARY;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.SECONDARY as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.SECONDARY;
};

export const useSuccess = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.SUCCESS;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.SUCCESS as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.SUCCESS;
};

export const useDanger = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.DANGER;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.DANGER as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.DANGER;
};

export const useWarning = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.WARNING;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.WARNING as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.WARNING;
};

export const useInfo = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.INFO;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.INFO as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.INFO;
};

export const useLight = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.LIGHT;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.LIGHT as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.SECONDARY;
};

export const useDark = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.DARK;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.DARK as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.DARK;
};

export const useWhite = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.WHITE;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.WHITE as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.WHITE;
};

export const useMuted = (gradientValue: number) => {
  const { color } = useThemeConfigurationContext();
  if (gradientValue < 1) return color.MUTED;
  const gradient = new Gradient()
    .setColorGradient('#ffffff', color.MUTED as string, '#000000')
    .setMidpoint(900)
    .getColor(gradientValue);
  return gradient ? gradient : color.MUTED;
};
