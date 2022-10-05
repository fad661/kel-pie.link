import React, { ChangeEvent, FC, ReactEventHandler, SyntheticEvent, useCallback, useEffect, useMemo } from 'react';
import { parse, ParseResult } from 'papaparse';
import { styles } from './Controller.style';
import { CardType, CARD_TYPE, SideType, SIDE_TYPE, usePrintMode } from '../../contexts/PrintMode';

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
  const {sideType, setSideType, loadCardType, setLoadCardType} = usePrintMode();

  useEffect(() => {
    setLoadCardType(CARD_TYPE.PROJECT);
  }, [])

  const selectSideTypeProps = useMemo(() => {
    const options = Object.entries(SIDE_TYPE).map(([key, value]) => {
      return {
        value,
        label: key
      };
    });
    const onSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
      const sidType = parseInt(e.currentTarget.value) as SideType;
      setSideType(sidType);
    };
    return {
      options,
      onSelect,
      selectedValue: sideType
    }
  }, [sideType, setSideType]);

  const selectCardTypeProps = useMemo(() => {
    const options = Object.entries(CARD_TYPE).map(([key, value]) => {
      return {
        value,
        label: key
      };
    });
    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      const sideType = e.currentTarget.value as CardType;
      setLoadCardType(() => sideType);
    };
    return {
      options,
      onSelect,
      selectedValue: loadCardType
    }
  }, [loadCardType, setLoadCardType])

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

  const onSelectFile = useMemo(() => {
    switch(loadCardType) {
      case CARD_TYPE.MONEY:
        return onChangeMoney;
      case CARD_TYPE.PROJECT:
        return onChangeProject;
      default:
        return () => {} 
    }
  }, [loadCardType, onChangeMoney, onChangeProject]);
  
  return (
    <footer css={styles.footer}>
      <div>
        <div><strong>Print mode</strong></div>
        <Select {...selectSideTypeProps} />
      </div>
      <div>
        <div><strong>Card type</strong></div>
        <div>
          <Select {...selectCardTypeProps} />
          <input type="file" name="money" onChange={onSelectFile} />
        </div>
      </div>
      <div>
        <button css={styles.button} type="button" onClick={onClick}>Print</button>
      </div>
    </footer>
  );
};

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: Option[],
  onSelect: ReactEventHandler<HTMLSelectElement>,
  selectedValue: string | number;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  onSelect = () => {},
  selectedValue,
}) => {
  return (
    <select css={styles.select} onChange={onSelect}>
      {options.map((option) => (
        <option value={option.value} selected={option.value === selectedValue}>{option.label}</option>
      ))}
    </select>
  )
};

export default Controller;