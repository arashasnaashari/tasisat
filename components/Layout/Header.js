import Nav from "./Nav";
import Profile from "./Profile";
import Dark from "./Dark";
const Header = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <div className="grid grid-cols-9 gap-3 md:px-8 px-2 md:grid-flow-col md:grid-cols-12 ">
        <div className="col-span-3 md:col-span-1">
          <div className="flex items-center h-28 justify-start">
            <div className="md:ml-6">
              <Dark />
            </div>
            <div className="md:ml-6">
              <Profile />
            </div>
          </div>
        </div>
        <div className="md:col-span-10 col-span-4">
          <div className="flex items-center h-28 ">
            <Nav />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center h-28 justify-end">
            <a href="/">
              <h1 className="text-2xl font-bold">LOGO</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
