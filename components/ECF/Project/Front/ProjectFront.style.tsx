import { css } from '@emotion/react';
import { COLOR, COLORS } from '../../index.style';

export const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: strech;
    width: 100%;
    height: 100%;
  `,
  section: css`
    position: relative;
    padding: 10px 0;

    &:not(:last-child) {
      height: min-content;
      border-bottom: 1px solid #ccc;
    }
  `,
  leaderPoint: css`
    bottom: 0;
    left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    writing-mode: vertical-rl;
    font-size: 2.4em;
    line-height: 1;
    font-weigh: bolder;
    

    &:before {
      display: block;
      content: "";
      content: attr(title);
      font-size: 0.2em;
      color: #ccc;
    }
  `,
  slots: css`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  slot: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1px;
    writing-mode: vertical-rl;
    text-orientation: sideways;

    &:before {
      display: block;
      content: attr(title);
      font-size: 0.4em;
      color: #ccc;
    }
  `,
  cost: css`
    display: flex;
    flex-direction: row;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  badge: (color?: COLOR) => css`
    box-sizing: border-box;
    background: ${color ?? '#fff'};
    border: 1px solid ${color ?? COLORS.NONE};
    border-radius: 50%;
    width: 0.5em;
    aspect-ratio: 1 / 1;
  `
};