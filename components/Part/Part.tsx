import React, { FC, useMemo } from 'react';
import { Json } from '../../@types/json';
import { PART } from '../../define';

type Props = {
  template: Json.Part;
  value: string;
}

export const Part: FC<Props> = ({
  template,
  value
}) => {

  const content = useMemo(() => {
    switch (template.content.type) {
      case PART.CONTENT.TYPE.IMAGE:
        return <img src={value} alt={value} />
      case PART.CONTENT.TYPE.TEXT:
      default:
        return <p>{value}</p>;
    }
  }, [template.content.type, value]);

  const style = useMemo(() => {

  }, [template.position]);
  
  return (
    <div>

    </div>
  );
};

export default Part;