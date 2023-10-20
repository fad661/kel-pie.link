import { css } from '@emotion/react';

export const styles = {
  picture: (color: string) => css`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    background: #000;

    img {
      background: ${color};
      display: block;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      padding: 10px;
      box-sizing: border-box;
    }
  `,
};