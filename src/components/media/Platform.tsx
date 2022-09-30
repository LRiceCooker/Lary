import React from 'react';
import { laryComponentPassedPropsType } from '../../types/utils';
import usePlateform from '../../hooks/usePlatform';

const Plateform = ({
  passedProps,
  children
}: {
  passedProps: laryComponentPassedPropsType;
  children: JSX.Element;
}) => {
  const [isWeb, isAndroid, isIos] = usePlateform();

  return !passedProps.android && !passedProps.web && !passedProps.ios ? (
    children
  ) : (
    <>
      {passedProps.android ? (isAndroid ? children : null) : null}
      {passedProps.ios ? (isIos ? children : null) : null}
      {passedProps.web ? (isWeb ? children : null) : null}
    </>
  );
};

export default Plateform;
