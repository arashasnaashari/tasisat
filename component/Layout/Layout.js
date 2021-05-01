import Header from "./Header";
import Footer from "./Footer";
import Contxt from "../../context/auth-context";
import { useContext } from "react";
const Layout = (props) => {
  return (
    <>
      <div className="bg-white">
        {props.children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
