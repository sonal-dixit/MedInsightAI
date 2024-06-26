import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
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
console.log(pathname);
  const dark = getHeading(pathname) ? true : false;
  const dark1 = pathname === "/loading" ? true : false;

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{
        background: dark
          ? "#0d0d0d"
          : dark1
          ? "#080808"
          : "linear-gradient(135deg, #CACEF1 0%, #FFD9C9 100%)",
      }}
    >
      <Navbar />
      <main className={`mt-12 ${!dark ? "mb-12" : ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
