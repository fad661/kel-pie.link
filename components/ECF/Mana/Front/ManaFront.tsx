import React, { FC, useMemo } from 'react';
import Card from '../../../Card/Card';
import { styles } from './ManaFront.style';

const ABILITY_TYPE = {
  ATTACK: 'アタック',
  BICTORY: '勝利点',
  BUY: '購入',
  ACTION: 'アクション',
  CARD: 'ドロー',
  DEMERIT: 'デメリット',
  REACTION: 'リアクション',
  CONTROLE: '市場操作',
  JOKER: 'ジョーカー',
  OTHER: '特殊'
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
  additionalAbility = '',
}) => {
  console.log(mana);

  const [color, charaImageName] = useMemo(() => {
    switch(abilityType) {
      case ABILITY_TYPE.ATTACK:
      case ABILITY_TYPE.JOKER:
        return ['#F16056', 'anubis.png'];
      case ABILITY_TYPE.BICTORY:
      case ABILITY_TYPE.ACTION:
        return ['#00A583', 'bastet.png'];
      case ABILITY_TYPE.BUY:
        return ['#F2D324', 'horus.png'];
      case ABILITY_TYPE.REACTION:
      case ABILITY_TYPE.CARD:
        return ['#4D73BB', 'wenet.png'];
      case ABILITY_TYPE.CONTROLE:
        return ['#f1b356', 'set.png'];
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
        <p>{marketAbility}</p>
        <p>{additionalAbility}</p>
      </div>
    </Card>
  );
};

export default ManaFront;