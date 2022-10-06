import { css } from '@emotion/react';

export const styles = {
  footer: css`
    z-index: 100;
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 40px;
    background: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media print {
      display: none;
    }
  `,
  select: css`
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 8px;
  `,
  button: css`
    cursor: pointer;
    outline: none;
    background: #fff;
    border: 2px solid #FF5959;
    border-radius: 20px;
    color: #FF5959;
    padding: 10px 20px;
    
    &:hover {
      background: #FF5959;
      color: #fff;
    }
  `,
};