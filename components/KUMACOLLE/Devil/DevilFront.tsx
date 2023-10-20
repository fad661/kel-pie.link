import objectHash from 'object-hash';
import React, { FC, useMemo } from 'react';
import Card from '../../Card/Card';
import { styles } from './DevilFront.style';

const ATTRIBUTE = {
  ELEMENT: 'element',
  SPRIT: 'sprit',
  WISDOM: 'wisdom'
} as const;

const IMAGE_PATH = '/images/kumacolle';

export type Attribute = typeof ATTRIBUTE[keyof typeof ATTRIBUTE];


type Props = {
  cost: number;
  attribute: Attribute;
  name: string;
  effects: string[];
  imagePath: string;
}

export const DevilFront: FC<Props> = ({
  cost,
  attribute,
  name,
  effects = [],
  imagePath
}) => {

  return (
    <Card>
      <p css={styles.label}>
        <img src={`${IMAGE_PATH}/attributes/${attribute}.svg`} />
      </p>
      {cost ? (
        <ul css={styles.ul}>
          {[...Array(cost)].map(() => (
            <li key={`${objectHash(cost)}-${cost}`} css={styles.li}>
              <img src={`${IMAGE_PATH}/meat.svg`} />
            </li>
          ))}
        </ul>
      ) : null}
      <picture css={styles.picture}>
        <img src={`${IMAGE_PATH}/devils/${imagePath}.png`} />
      </picture>
      <div css={styles.name}>{name}</div>
      <div css={styles.textWrapper}>
        {effects.map((effect) => (
          <p>{effect}</p>
        ))}
      </div>
    </Card>
  );
};

export default DevilFront;