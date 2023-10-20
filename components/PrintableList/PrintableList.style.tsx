import { css } from '@emotion/react';
import { PRINT_MODE, PrintMode } from '../../contexts/PrintMode';

const resetList = (printMode: PrintMode,reverse = false) =>  css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media print {
    gap:${printMode === PRINT_MODE.PRINT ? '5px' : 0};
    flex-direction: ${reverse ? 'row-reverse': 'row'};
  }
`;

export const styles = {
  a4: css`
    width: 100%;
    margin: 20px;

    @media print {
      margin: 0;
      -webkit-print-color-adjust: exact;
      page-break-before: always;
    }
  `,
  title: css`
    color: #ccc;
    @media print {
      display: none;
    }
  `,
  ul: (printMode: PrintMode, reverse = false) => css`
    ${resetList(printMode, reverse)}
  `
};