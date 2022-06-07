export const COLORS = {
  RED: '#f6abab',
  BLUE: '#c5cfff',
  GREEN: '#beeeb5',
  NONE: '#ccc'
} as const;

export type COLOR = typeof COLORS[keyof typeof COLORS];

const getColorIndex = (color: COLOR): number => {
  return Object.keys(COLORS).findIndex((key) => {
    return COLORS[key as keyof typeof COLORS] === color;
  });
};

export const sortColor = (a: COLOR, b: COLOR): number => {
  return getColorIndex(a) - getColorIndex(b);
}