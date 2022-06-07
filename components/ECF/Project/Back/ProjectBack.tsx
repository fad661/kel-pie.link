import React, { FC } from 'react';
import Card from '../../../Card/Card';
import { styles } from './ProjectBack.style';


type Props = {
  turn: number;
}
export const MoneyBack: FC<Props> = ({
  turn,
}) => {
  return (
    <Card>
      <p css={styles.p}>{turn}</p>
    </Card>
  );
};

export default MoneyBack;