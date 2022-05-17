import { Sx } from 'dripsy';

export default interface colorPropsType {
  bdInfo?: boolean;
  bgInfo?: boolean;
  inInfo?: boolean;
  bdWarning?: boolean;
  bgWarning?: boolean;
  inWarning?: boolean;
  bdPrimary?: boolean;
  bgPrimary?: boolean;
  inPrimary?: boolean;
  bdSecondary?: boolean;
  bgSecondary?: boolean;
  inSecondary?: boolean;
  bdLight?: boolean;
  bgLight?: boolean;
  inLight?: boolean;
  bdDark?: boolean;
  bgDark?: boolean;
  inDark?: boolean;
  bdMuted?: boolean;
  bgMuted?: boolean;
  inMuted?: boolean;
  bdDanger?: boolean;
  bgDanger?: boolean;
  inDanger?: boolean;
  bdSuccess?: boolean;
  bgSuccess?: boolean;
  inSuccess?: boolean;
  bdWhite?: boolean;
  bgWhite?: boolean;
  inWhite?: boolean;
  backgroundColor?: Sx['backgroundColor'];
  borderColor?: Sx['borderColor'];
  color?: Sx['color'];
}
