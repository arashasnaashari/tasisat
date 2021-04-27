import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";
// import ReactNotification from "react-notifications-component";
import Head from "next/head";

// import "react-notifications-component/dist/theme.css";

// import "../styles/app.css";
function MyApp({ Component, pageProps }) {
  const [model, useModel] = useState(false);
  const Modeling = () => {
    useModel(true);
  };
  const Clozing = () => {
    useModel(false);
  };
  // if (typeof window !== "undefined") {
  //   window.$crisp = [];
  //   window.CRISP_WEBSITE_ID = "35a6cabe-2b02-430b-83f5-052512dee25d";
  //   (function () {
  //     document.createElement("script").src = "https://client.crisp.chat/l.js";
  //     document.createElement("script").async = 1;
  //     document
  //       .getElementsByTagName("head")[0]
  //       .appendChild(document.createElement("script"));
  //   })();
  // }
  return (
    <>
      {/* <Head>
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
      </Head> */}

      <Contx.Provider
        value={{
          setModel: Modeling,
          clozeModal: Clozing,
          modal: model,
        }}
      >
        {/* <ReactNotification /> */}
        <Component {...pageProps} />
      </Contx.Provider>
    </>
  );
}

export default MyApp;
