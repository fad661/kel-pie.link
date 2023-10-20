export const COLORS = {
  RED: '#ff4343',
  BLUE: '#2c68ff',
  GREEN: '#1eff65',
  YELLOW: '#fffb1e',
  PURPLE: '#ff1ece',
  ORANGE: '#ffa62a',
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