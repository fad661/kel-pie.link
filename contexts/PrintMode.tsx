import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export const SIDE_TYPE = {
  ONE: 1,
  BOTH: 2
} as const;

export type SideType = typeof SIDE_TYPE[keyof typeof SIDE_TYPE];


export const CARD_TYPE = {
  MONEY: 'money',
  PROJECT: 'project',
  MANA: 'mana',
} as const;

export type CardType = typeof CARD_TYPE[keyof typeof CARD_TYPE];

type Context = {
  sideType: SideType;
  setSideType: Dispatch<SetStateAction<SideType>>;
  loadCardType: CardType;
  setLoadCardType: Dispatch<SetStateAction<CardType>>;
};

const PrintModeContext = createContext<Context>(
  {
    sideType: SIDE_TYPE.ONE,
    setSideType: () => {},
    loadCardType: CARD_TYPE.MANA,
    setLoadCardType: () => {},
  }
);

const useProvidePrintMode = (): Context => {
  const [sideType, setSideType] = useState<SideType>(SIDE_TYPE.ONE);
  const [loadCardType, setLoadCardType] = useState<CardType>(CARD_TYPE.MANA);
  return {
    sideType,
    setSideType,
    loadCardType,
    setLoadCardType
  }
};

export const PrintModeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const value = useProvidePrintMode();

  return (
    <PrintModeContext.Provider value={value}>
      {children}
    </PrintModeContext.Provider>
  )
};

export const usePrintMode = () => {
  return useContext(PrintModeContext);
};