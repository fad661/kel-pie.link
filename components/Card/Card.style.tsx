import { css } from '@emotion/react';

const resetCard = (background?: string) => css`
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
    break-inside: avoid;
  }
`;

export const styles = {
  halfPorker: (background?: string) => css`
    ${resetCard(background)}
    width: 63mm;
    height: 44mm;
  `,
  porker: (background?: string) => css`
    ${resetCard(background)}
    height: 88mm;
    width: 63mm;
  `,
};