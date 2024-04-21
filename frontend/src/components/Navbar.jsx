import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const handleTabChange = (tab) => {
    navigate(`/${tab}`);
  };

  const isActiveTab = (tab) => {
    if(pathname === "/" && tab === "heart") return true;
    return pathname === `/${tab}`? tab : "";
  };

  const getHeading = (path) => {
    switch (path) {
      case "/":
      case "/heart":
      case "/diabetes":
      case "/breastCancer":
      case "/kidney":
      case "/liver":
      case "/malaria":
      case "/pneumonia":
        return true;
      default:
        return false;
    }
  };

  const dark = getHeading(pathname) || pathname === "/loading" ? true : false;

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
      <div className="gap-2 flex ">
        <button
          className={`btn ${isActiveTab("heart") ? "active" : ""}`}
          onClick={() => handleTabChange("heart")}
        >
          Heart
        </button>
        <button
          className={`btn ${isActiveTab("diabetes") ? "active" : ""}`}
          onClick={() => handleTabChange("diabetes")}
        >
          Diabetes
        </button>
        <button
          className={`btn ${isActiveTab("breastCancer") ? "active" : ""}`}
          onClick={() => handleTabChange("breastCancer")}
        >
          Breast Cancer
        </button>
        <button
          className={`btn ${isActiveTab("kidney") ? "active" : ""}`}
          onClick={() => handleTabChange("kidney")}
        >
          Kidney
        </button>
        <button
          className={`btn ${isActiveTab("liver") ? "active" : ""}`}
          onClick={() => handleTabChange("liver")}
        >
          Liver
        </button>
        <button
          className={`btn ${isActiveTab("malaria") ? "active" : ""}`}
          onClick={() => handleTabChange("malaria")}
        >
          Malaria
        </button>
        <button
          className={`btn ${isActiveTab("pneumonia") ? "active" : ""}`}
          onClick={() => handleTabChange("pneumonia")}
        >
          Pneumonia
        </button>
      </div>
    </div>
  );
};

export default Navbar;
