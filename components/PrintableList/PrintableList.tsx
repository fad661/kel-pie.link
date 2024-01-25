import React, { FC, ReactNode, useMemo } from 'react';
import { PRINT_MODE, PrintMode, usePrintMode } from '../../contexts/PrintMode';
import { styles } from './PrintableList.style';

const SIZES = {
  A4: 'A4',
  ADJUST: 'adjust',
} as const;

type Props = {
  size?: typeof SIZES[keyof typeof SIZES];
  title?: string;
  children?: ReactNode;
  reverse?: boolean;
  printMode?: PrintMode;
}

export const PrintableList: FC<Props> = ({
  size = 'A4',
  title,
  children,
  reverse = false,
  printMode = PRINT_MODE.PRINT
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
      <ul css={styles.ul(printMode, reverse)}>
        {children}
      </ul>
    </section>
  );
};

export default PrintableList;