import React, { FC, useMemo } from 'react';
import Card from '../../../Card/Card';
import { COLOR } from '../../index.style';
import { styles } from './MoneyFront.style';


type Props = {
  color: COLOR;
  amount: number;
}
export const MoneyFront: FC<Props> = ({
  color,
  amount,
}) => {

  const liStyle = useMemo(() => {
    return styles.li(color);
  }, []);
  
  return (
    <Card>
      <ul css={styles.ul}>
        <li css={liStyle}>{amount}</li>
      </ul>
    </Card>
  );
};

export default MoneyFront;