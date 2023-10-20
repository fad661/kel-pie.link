import { css } from '@emotion/react';

export const styles = {
  label: css`
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    border-radius: 0 0 0 10px;
    padding: 2mm;
    width: 40px;
    display: flex;
    list-style: none;
    color: #fff;
    font-size: 3mm;
    font-weight: bold;
  `,
  ul: css`
    z-index: 3;
    position: absolute;
    top: 2mm;
    left: 2mm;
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  `,
  li: css`
    width: 8mm;
    height: 8mm;
  `,
  background: css`
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80%;
    opacity: .4;
    clip-path: circle(99.1% at 100% 99%);
  `,
  picture: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
    width: 80%;
    height: 80%;
  `,
  name: css`
    border: 2px solid #000;
  `,
  textWrapper: css`
    box-sizing: border-box;
    z-index: 3;
    background: #fff;
    font-size: 2mm;
    font-weight: bold;
    position: absolute;
    bottom: 2mm;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 2mm 4mm;
    width: 90%;
    height: 40%;

    & p {
      margin: 0;
      padding: 2mm 0;
      &:first-child {
        border-bottom: 1px solid #ccc;
      }
    }
  `,
};