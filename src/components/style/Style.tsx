import React from 'react';
import { useSx, SxProp } from 'dripsy';

const Style = ({ style, children }: { style?: SxProp; children: JSX.Element }): JSX.Element => {
  const sx = useSx();
  return style ? React.cloneElement(children, { style: sx(style) }) : children;
};

export default Style;
