import React, { FC } from 'react';
import Card from '../../../Card/Card';
import { COLOR } from '../../index.style';


type Props = {
  color: COLOR;
}
export const MoneyBack: FC<Props> = ({
  color,
}) => {
  return (
    <Card />
  );
};

export default MoneyBack;