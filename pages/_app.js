import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyApp({ Component, pageProps }) {
  const [model, useModel] = useState(false);
  const Modeling = () => {
    useModel(true);
  };
  const Clozing = () => {
    useModel(false);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>bookgram</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Contx.Provider
        value={{
          setModel: Modeling,
          clozeModal: Clozing,
          modal: model,
        }}
      >
        <Component {...pageProps} />
      </Contx.Provider>
    </>
  );
}

export default MyApp;
