/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

const App: React.FC = ({ Component, pageProps }: any) => (
  <>
    <Header />
    <Component {...pageProps} />
    <div id="root-modal" />
  </>
);

export default App;
