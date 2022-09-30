import React from 'react';
import { laryComponentPassedPropsType } from '../../types/utils';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Avoiding = ({
  passedProps,
  children
}: {
  passedProps: laryComponentPassedPropsType;
  children: JSX.Element;
}) => {
  return passedProps.avoiding ? (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    children
  );
};

export default Avoiding;
