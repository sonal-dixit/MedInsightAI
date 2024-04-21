import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const dark = pathname === "/" || pathname === "/loading/" ? true : false;

  return (
    <div
      className="h-20 flex items-center justify-between px-28 shadow-lg max-sm:px-4 z-10"
      style={dark ? { background: "#080808" } : { background: "white" }}
    >
      <Link to="/">
        <img
          src={dark ? logoDark : logo}
          alt="logo"
          className="w-48 max-sm:w-40 pointer-events-none select-none"
        />
      </Link>
    </div>
  );
};

export default Navbar;
