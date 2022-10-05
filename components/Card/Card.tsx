import React, { FC, ReactNode, useMemo } from 'react';
import { styles } from './Card.style';

const SIZES = {
  HALF_PORKER: 'halfPorker',
  PORKER: 'porker'
} as const;

type Props = {
  size?: typeof SIZES[keyof typeof SIZES];
  background?: string;
  as?: 'back' | 'front';
  children?: ReactNode
}
export const Card: FC<Props> = ({
  size = SIZES.PORKER,
  background,
  children
}) => {

  const style = useMemo(() => {
    switch(size) {
      case SIZES.HALF_PORKER:
        return styles.halfPorker(background);
      default:
        return styles.porker(background);
    }
  }, [size, background]);
  
  return (
    <li css={style}>
      {children}
    </li>
  );
};

export default Card;