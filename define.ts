export const CARD = {
  SIZE: {
    POKER: "poker",
    HALF_POKER: "halfPoker"
  },
} as const;

export const PART = {
  POSITION: {
    X: {
      LEFT: "left",
      CENTER: "center",
      RIGHT: "right",
      FILL: "fill"
    },
    Y: {
      TOP: "top",
      CENTER: "center",
      BOTTOM: "bottom",
      FILL: "fill" 
    },
    LAYER: {
      UI: 1000,
      CONTENT: 100,
      BACKGROUND: 0,
    }
  },
  CONTENT: {
    TYPE: {
      TEXT: "text",
      IMAGE: "image",
    }
  },
} as const;