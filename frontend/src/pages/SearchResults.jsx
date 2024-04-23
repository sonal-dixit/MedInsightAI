import Dashboard from "../components/Dashboard";
import SideCards from "../components/SideCards";

const SearchResults = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center gap-8 mt-2">
      <div className="max-lg:px-16 max-sm:px-4 px-24 gap-4 flex flex-col relative items-center justify-center w-full">
        <SideCards />
        <Dashboard>{children}</Dashboard>
      </div>
    </div>
  );
};

export default SearchResults;
