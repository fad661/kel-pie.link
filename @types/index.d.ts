import { CARD, PART } from "../define";

export type CardSize = typeof CARD.SIZE[keyof typeof CARD.SIZE];

export type Position = {
  X: typeof PART.POSITION.X[keyof typeof PART.POSITION.X],
  Y: typeof PART.POSITION.Y[keyof typeof PART.POSITION.Y],
  Layer: typeof PART.POSITION.LAYER[keyof typeof PART.POSITION.LAYER],
};

export type PartType = typeof PART.CONTENT.TYPE[keyof typeof PART.CONTENT.TYPE];