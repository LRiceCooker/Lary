import React from 'react';
import { laryComponentPassedPropsType } from '../../types/utils';
import { KeyboardAvoidingView as NativeKeyboardAvoidingView, Platform } from 'react-native';
import laryfy from '../../hooks/laryfy';

const KeyboardAvoidingView = laryfy<React.ComponentProps<typeof NativeKeyboardAvoidingView>>(
  NativeKeyboardAvoidingView as React.ComponentType<unknown>
);

const Avoiding = ({
  passedProps,
  children
}: {
  passedProps: laryComponentPassedPropsType;
  children: JSX.Element;
}) => {
  return passedProps.avoiding ? (
    <KeyboardAvoidingView
      {...{ ...passedProps, avoiding: undefined }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {children.props.children}
    </KeyboardAvoidingView>
  ) : (
    children
  );
};

export default Avoiding;
