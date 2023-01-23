import React, { FC, ReactNode, useMemo } from 'react';
import { usePrintMode } from '../../contexts/PrintMode';
import { styles } from './PrintableList.style';

const SIZES = {
  A4: 'A4',
} as const;

type Props = {
  size?: typeof SIZES[keyof typeof SIZES];
  title?: string;
  children?: ReactNode;
  reverse?: boolean;
}

export const PrintableList: FC<Props> = ({
  size = 'A4',
  title,
  children,
  reverse = false,
}) => {
  const wrapperStyle = useMemo(() => {
    switch (size) {
      case SIZES.A4:
        return styles.a4;
      default:
        null;
    }
  }, [size]);
  return (
    <section css={wrapperStyle}>
      <h2 css={styles.title}>{title}</h2>
      <ul css={styles.ul(reverse)}>
        {children}
      </ul>
    </section>
  );
};

export default PrintableList;