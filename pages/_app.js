import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";
import Contx from "../context/auth-context";
import { useState, useEffect, useContext } from "react";

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
