import { css } from '@emotion/react';
import { PrintMode, PRINT_MODE } from '../../contexts/PrintMode';

const resetCard = (printMode: PrintMode, background?: string) => css`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background: ${background};

  @media print {
    margin: ${printMode === PRINT_MODE.PRINT ? '5px' : 0};
    break-inside: avoid;
  }
`;

export const styles = {
  halfPorker: (printMode: PrintMode, background?: string) => css`
    ${resetCard(printMode, background)}
    width: 63mm;
    height: 44mm;
  `,
  porker: (printMode: PrintMode, background?: string) => css`
    ${resetCard(printMode, background)}
    height: 88mm;
    width: 63mm;
  `,
};