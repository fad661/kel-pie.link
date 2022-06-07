import { css } from '@emotion/react';
import { COLOR } from '../../index.style';

export const styles = {
  ul: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -20px;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  li: (color: COLOR) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid ${color};
    border-radius: 50%;
    width: 70%;
    aspect-ratio: 1 / 1;
    writing-mode: vertical-rl;
    font-size: 2.4em;
    color: ${color};
    font-weight: bolder;
    background: #fff;
  `
};