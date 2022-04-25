import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import Header from '../components/Header';

const App:React.FC= ({ Component, pageProps }: any)=> {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <div id="root-modal"/>
        </>
    );
}

export default App;