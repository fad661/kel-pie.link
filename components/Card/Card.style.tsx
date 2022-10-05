import { css } from '@emotion/react';

const resetCard = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  @media print {
    break-inside: avoid;
  }
`;

export const styles = {
  half: (background?: string) => css`
    ${resetCard}
    background: ${background};
    width: 128px;
    height: 181px;
  `,
};