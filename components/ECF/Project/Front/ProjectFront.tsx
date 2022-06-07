import React, { FC, useMemo } from 'react';
import hash from 'object-hash';
import Card from '../../../Card/Card';
import { styles } from './ProjectFront.style';
import { COLOR, sortColor } from '../../index.style';

const PROJECT_TYPES = {
  A: 'a',
  B: 'b',
  C: 'c'
} as const;

type PROJECT = typeof PROJECT_TYPES[keyof typeof PROJECT_TYPES];

export const POINT_TYPES = {
  BOND: '名誉', // Bond;
  WEALTH: '富', // Weahlth
  FAME: '愛' // Fame
} as const;

type POINT = typeof POINT_TYPES[keyof typeof POINT_TYPES];

type Props = {
  projectType?: PROJECT;
  leaderPoint: number;
  slots: Slot[];
}

export type Slot = {
  difficluty: number;
  pointType: POINT;
  costs: Cost[];
};

export type Cost = {
  color: COLOR;
  amount: number;
};

export const ProjectFront: FC<Props> = ({
  projectType,
  leaderPoint,
  slots
}) => {

  const sortedCost = useMemo(() => {

  }, [slots]);
  
  return (
    <Card>
      <div css={styles.wrapper}>
        <section css={styles.section}>
          {/* {thumbnailとか入る} */}
          <p css={styles.leaderPoint} title="LP">{leaderPoint}</p>
        </section>
        <section css={styles.section}>
          <ul css={styles.slots}>
            {slots.map((slot) => (
              <li key={hash(slot)} css={styles.slot} title={`${slot.pointType} ${slot.difficluty}`}>
                <Costs costs={slot.costs} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Card>
  );
};

const Costs: FC<{ costs: Cost[]}> = ({
  costs
}) => {

  const sortedCosts = useMemo(() => {
    return costs.sort((a, b) => {
      return sortColor(a.color, b.color);
    })
  }, [costs]);

  return (
    <ul css={styles.cost}>
      {sortedCosts.map((cost) => {
        return [...Array(cost.amount)].map(() => (
          <li key={hash(cost)} css={styles.badge(cost.color)} />
        ))
      })}
    </ul>
  )
}

export default ProjectFront;