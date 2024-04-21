import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { PageTransition } from "./components/Animations";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import HeartReport from "./pages/ResultPages/HeartReport";
import LungsReport from "./pages/ResultPages/LungsReport";
import DiabetesReport from "./pages/ResultPages/DiabetesReport";
import SearchResults from "./pages/SearchResults";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const Search = ({ children }) => {
  return (
    <>
      <SearchResults>{children}</SearchResults>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Toaster position="top-center" />
      <PageTransition>
        <Layout>
          <Routes>
            <Route path="/loading" element={<Loading />} />
            <Route
              path="/report/*"
              element={
                <Search>
                  <Routes>
                    <Route path="/heartreport" element={<HeartReport />} />
                    <Route path="/lungsreport" element={<LungsReport />} />
                    <Route
                      path="/diabetesreport"
                      element={<DiabetesReport />}
                    />
                  </Routes>
                </Search>
              }
            />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </PageTransition>
    </Router>
  );
};

export default App;
