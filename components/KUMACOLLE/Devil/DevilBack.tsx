import objectHash from 'object-hash';
import React, { FC, useMemo } from 'react';
import Card from '../../Card/Card';
import { styles } from './DevilBack.style';
import { COLORS } from '../index.style';

const ATTRIBUTE = {
  ELEMENT: 'element',
  MIND: 'mind',
  WISDOM: 'wisdom'
} as const;

const IMAGE_PATH = '/images/kumacolle';

const SIGN = {
  ARIES: 'Aries',
  TAURUS: 'Taurus',
  GEMINI: 'Gemini',
  CANCER: 'Cancer',
  LEO: 'Leo',
  VIRGO: 'Virgo',
  LIBRA: 'Libra',
  SCORPIO: 'Scorpio',
  SAGITTARIUS: 'Sagittarius',
  CAPRICORN: 'Capricorn',
  AQUARIUS: 'Aquarius',
  PISCES: 'Pisces'
} as const;

export type Sign = typeof SIGN[keyof typeof SIGN];
export type Attribute = typeof ATTRIBUTE[keyof typeof ATTRIBUTE];


type Props = {
  sign: Sign;
}

export const DevilBack: FC<Props> = ({
  sign,
}) => {
  const color = useMemo(() => {
    switch(sign) {
      case SIGN.ARIES:
      case SIGN.LEO:
        return COLORS.BLUE;
      case SIGN.TAURUS:
      case SIGN.LIBRA:
        return COLORS.RED;
      case SIGN.AQUARIUS:
      case SIGN.PISCES:
        return COLORS.GREEN;
      case SIGN.CANCER:
      case SIGN.SAGITTARIUS:
        return COLORS.YELLOW;
      case SIGN.CAPRICORN:
      case SIGN.SCORPIO:
        return COLORS.PURPLE;
      case SIGN.GEMINI:
      case SIGN.VIRGO:
        return COLORS.ORANGE;
      default:
        return COLORS.NONE;
    }
  }, [sign]);

  return (
    <Card>
      <picture css={styles.picture(color)}>
        <img src={`${IMAGE_PATH}/zodiacs/${sign}.svg`} />
      </picture>
    </Card>
  );
};

export default DevilBack;