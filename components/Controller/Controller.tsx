import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useCallback } from 'react';
import { parse, ParseResult } from 'papaparse';
import { styles } from './Controller.style';

export type BillRow= {
  color: string;
  amount: string;
};

export type ProjectRow = {
  type: string;
  leaderPoint: string;
  turn: string;
  slot1_type: string;
  slot1_dif: string;
  slot1_costs: string;
  slot2_type: string;
  slot2_dif: string;
  slot2_costs: string;
  slot3_type: string;
  slot3_dif: string;
  slot3_costs: string;
}

type Props = {
  onParseMoneyCallback: (data: BillRow[]) => void;
  onParseProjectCallback: (data: ProjectRow[]) => void;
}

const parseWithCallback = <T,>(file: File, callback: (data: T[]) => void) => {
  parse<T>(file, {
    complete: (results: ParseResult<T>) => {
      callback(results.data);
    },
    header: true
  });
};

export const Controller: FC<Props> = ({
  onParseMoneyCallback,
  onParseProjectCallback
}) => {
  const onChangeMoney = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    parseWithCallback<BillRow>(file, onParseMoneyCallback);
  }, []);

  const onChangeProject = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    parseWithCallback<ProjectRow>(file, onParseProjectCallback);
  }, []);

  const onClick = useCallback(() => {
    window.print();
  }, []);
  
  return (
    <footer css={styles.footer}>
      <input type="file" name="money" onChange={onChangeMoney} />
      <input type="file" name="project" onChange={onChangeProject} />
      <div>
        <button type="button" onClick={onClick}>Print</button>
      </div>
    </footer>
  );
};

export default Controller;