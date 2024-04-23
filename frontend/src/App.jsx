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
import Report from "./pages/Report";
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
            <Route path="/heart" element={<Home />} />
            <Route path="/liver" element={<Home />} />
            <Route path="/malaria" element={<Home />} />
            <Route path="/kidney" element={<Home />} />
            <Route path="/pneumonia" element={<Home />} />
            <Route path="/breastCancer" element={<Home />} />
            <Route path="/diabetes" element={<Home />} />
            <Route
              path="/report"
              element={
                <Search>
                  <Report/>
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
