import React, { FC, useMemo } from 'react';
import Card from '../../../Card/Card';
import { styles } from './ManaFront.style';

const ABILITY_TYPE = {
  ATTACK: 'アタック',
  BICTORY: '勝利点',
  BUY: '購入',
  CARD: 'カード系',
  DEMERIT: 'デメリット',
  REACTION: 'リアクション',
  OTHER: 'その他'
} as const;

type AbilityType = typeof ABILITY_TYPE[keyof typeof ABILITY_TYPE];


type Props = {
  mana: number;
  abilityType: AbilityType;
  marketAbility?: string;
  additionalAbility?: string;
}

export const ManaFront: FC<Props> = ({
  mana,
  abilityType,
  marketAbility = '',
  additionalAbility = ''
}) => {

  const [color, charaImageName] = useMemo(() => {
    switch(abilityType) {
      case ABILITY_TYPE.ATTACK:
        return ['#F16056', 'anubis.png'];
      case ABILITY_TYPE.BICTORY:
        return ['#00A583', 'bastet.png'];
      case ABILITY_TYPE.BUY:
        return ['#F2D324', 'horus.png'];
      case ABILITY_TYPE.REACTION:
        return ['#4D73BB', 'wenet.png'];
      case ABILITY_TYPE.CARD:
      case ABILITY_TYPE.DEMERIT:
      case ABILITY_TYPE.OTHER:
      default:
        return ['#AB5792', 'sata.png']
    }
  }, [abilityType]);

  return (
    <Card>
      <p css={styles.label(color)}>{abilityType}</p>
      {mana ? (
        <ul css={styles.ul}>
          {[...Array(mana)].map(() => (
            <li css={styles.li}>
              <img src="/images/mana.svg" />
            </li>
          ))}
        </ul>
      ) : null}
      <div css={styles.background(color)} />
      <picture css={styles.picture}>
        <img src={`/images/${charaImageName}`} />
      </picture>
      <div css={styles.textWrapper(color)}>
        {marketAbility ? <p>{marketAbility}</p> : null}
        {additionalAbility ? <p>{additionalAbility}</p> : null}
      </div>
    </Card>
  );
};

export default ManaFront;