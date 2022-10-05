import React from 'react';
import { AppProps } from 'next/app';
import { PrintModeProvider } from '../contexts/PrintMode';

export const MyApp = ({ Component, pageProps}: AppProps) => (
  <PrintModeProvider>
    <Component {...pageProps} />
  </PrintModeProvider>
);

export default MyApp;