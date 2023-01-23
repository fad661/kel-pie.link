import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export const SIDE_TYPE = {
  ONE: 1,
  BOTH: 2
} as const;

export type SideType = typeof SIDE_TYPE[keyof typeof SIDE_TYPE];

export const PRINT_MODE = {
  PRINT: 1,
  PDF: 2,
} as const;

export type PrintMode = typeof PRINT_MODE[keyof typeof PRINT_MODE];


export const CARD_TYPE = {
  MONEY: 'money',
  PROJECT: 'project',
  MANA: 'mana',
} as const;

export type CardType = typeof CARD_TYPE[keyof typeof CARD_TYPE];

type Context = {
  sideType: SideType;
  setSideType: Dispatch<SetStateAction<SideType>>;
  printMode: PrintMode;
  setPrintMode: Dispatch<SetStateAction<PrintMode>>;
  loadCardType: CardType;
  setLoadCardType: Dispatch<SetStateAction<CardType>>;
};

const PrintModeContext = createContext<Context>(
  {
    sideType: SIDE_TYPE.ONE,
    setSideType: () => {},
    printMode: PRINT_MODE.PDF,
    setPrintMode: () => {},
    loadCardType: CARD_TYPE.MANA,
    setLoadCardType: () => {},
  }
);

const useProvidePrintMode = (): Context => {
  const [sideType, setSideType] = useState<SideType>(SIDE_TYPE.ONE);
  const [printMode, setPrintMode] = useState<PrintMode>(PRINT_MODE.PDF);
  const [loadCardType, setLoadCardType] = useState<CardType>(CARD_TYPE.MANA);

  return {
    sideType,
    setSideType,
    printMode,
    setPrintMode,
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