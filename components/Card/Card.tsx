import React, { FC, ReactNode, useMemo } from 'react';
import { styles } from './Card.style';

const SIZES = {
  HALF: 'half'
} as const;

type Props = {
  size?: typeof SIZES[keyof typeof SIZES];
  background?: string;
  as?: 'back' | 'front';
  children?: ReactNode
}
export const Card: FC<Props> = ({
  size = SIZES.HALF,
  background,
  children
}) => {

  const style = useMemo(() => {
    switch(size) {
      case SIZES.HALF:
        return styles.half(background);
      default:
        return null;
    }
  }, [size, background]);
  
  return (
    <li css={style}>
      {children}
    </li>
  );
};

export default Card;