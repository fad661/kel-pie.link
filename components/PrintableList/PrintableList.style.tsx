import { css } from '@emotion/react';

const resetList = (reverse = false) =>  css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: ${reverse ? 'row-reverse': 'row'};
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const styles = {
  a4: css`
    border: 1px solid #ccc;
    width: 595px;
    height: 842px;
  `,
  ul: (reverse = false) => css`
    ${resetList(reverse)}
  `
};