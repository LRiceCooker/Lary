import type { ComponentProps } from 'react';

type componentPropsType<componentType> = ComponentProps<
  componentType & keyof JSX.IntrinsicElements
>;

export default componentPropsType;
