import { css } from '@emotion/react';

export const styles = {
  footer: css`
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 40px;
    background: #fff;

    @media print {
      display: none;
    }
  `,
};