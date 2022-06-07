import { css } from '@emotion/react';

const resetList = (reverse = false) =>  css`
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
    gap: 0;
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
      size: A4 landscape;
      page-break-before: always;
    }
  `,
  title: css`
    color: #ccc;
    @media print {
      display: none;
    }
  `,
  ul: (reverse = false) => css`
    ${resetList(reverse)}
  `
};