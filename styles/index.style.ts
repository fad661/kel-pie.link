import { css } from "@emotion/react";
import { Position } from "../@types";
import { PART } from "../define";

const CardBorderWidth = 10;

export const parsePostionToSerializeGrid = (name: string, x: Position['X'], y: Position['Y']) => {
  const top = (() => {
    switch(y) {
      case PART.POSITION.Y.TOP:
        return `${CardBorderWidth}px`
    }
  })();
  return css`
    grid: ${name};
    
    top: 
  `
}