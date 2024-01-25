import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react';
import { toJpeg } from 'html-to-image';

export const SIDE_TYPE = {
  ONE: 1,
  BOTH: 2
} as const;

export type SideType = typeof SIDE_TYPE[keyof typeof SIDE_TYPE];

export const PRINT_MODE = {
  PRINT: 1,
  PDF: 2,
  TTS: 3,
} as const;

export type PrintMode = typeof PRINT_MODE[keyof typeof PRINT_MODE];


export const CARD_TYPE = {
  MONEY: 'money',
  PROJECT: 'project',
  MANA: 'mana',
  DEVIL: 'devil'
} as const;

export type CardType = typeof CARD_TYPE[keyof typeof CARD_TYPE];

type Context = {
  sideType: SideType;
  setSideType: Dispatch<SetStateAction<SideType>>;
  printMode: PrintMode;
  setPrintMode: Dispatch<SetStateAction<PrintMode>>;
  loadCardType: CardType;
  setLoadCardType: Dispatch<SetStateAction<CardType>>;
  convertToJpeg: (origin: HTMLElement, to?: HTMLImageElement) => void;
};

const PrintModeContext = createContext<Context>(
  {
    sideType: SIDE_TYPE.ONE,
    setSideType: () => {},
    printMode: PRINT_MODE.PDF,
    setPrintMode: () => {},
    loadCardType: CARD_TYPE.MANA,
    setLoadCardType: () => {},
    convertToJpeg: () => {}
  }
);

const useProvidePrintMode = (): Context => {
  const [sideType, setSideType] = useState<SideType>(SIDE_TYPE.ONE);
  const [printMode, setPrintMode] = useState<PrintMode>(PRINT_MODE.PDF);
  const [loadCardType, setLoadCardType] = useState<CardType>(CARD_TYPE.MANA);

  const convertToJpeg = useCallback((origin: HTMLElement, to?: HTMLImageElement) => {
    toJpeg(origin).then((dataUrl) => {
      if(to) {
        to.src = dataUrl;
      }
      window.open(dataUrl, '_blank');
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  return {
    sideType,
    setSideType,
    printMode,
    setPrintMode,
    loadCardType,
    setLoadCardType,
    convertToJpeg,
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