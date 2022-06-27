import React from 'react';
import { laryComponentPassedPropsType } from '../../types/utils';
import useBreakPoints from '../../hooks/useBreakPoints';

const Media = ({
  passedProps,
  children
}: {
  passedProps: laryComponentPassedPropsType;
  children: JSX.Element;
}) => {
  const [isXl, isLg, isMd, isSm] = useBreakPoints();

  return !passedProps.xl && !passedProps.lg && !passedProps.md && !passedProps.sm ? (
    children
  ) : (
    <>
      {passedProps.xl ? (isXl ? children : null) : null}
      {passedProps.lg ? (isLg ? children : null) : null}
      {passedProps.md ? (isMd ? children : null) : null}
      {passedProps.sm ? (isSm ? children : null) : null}
    </>
  );
};

export default Media;
