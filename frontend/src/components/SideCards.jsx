import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const ButtonLabel = ["HeartReport", "LungsReport", "DiabetesReport"];
const DisplayLabels = ["Heart Report", "Lungs Report", "Diabetes Report"];
const SideCards = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate(false);
  const { pathname } = useLocation(false);

  useEffect(() => {
    const parts = pathname.split("/");
    const selectedRoute = parts[parts.length - 1];
    const selectedIndex = ButtonLabel.findIndex(
      (label) => label.toLowerCase() === selectedRoute
    );
    if (selectedIndex !== -1) {
      setSelected(selectedIndex);
    }
  }, [pathname]);

  const handleClick = (idx) => {
    const searchParams = new URLSearchParams(location.search);
    const newUrl = `/report/${ButtonLabel[
      idx
    ].toLocaleLowerCase()}?${searchParams.toString()}`;
    navigate(newUrl);
  };

  return (
    <>
        <div className="flex justify-start xl:absolute top-0 left-10">
          <IoArrowBackOutline
            onClick={() => navigate("/")}
            className="text-3xl cursor-pointer text-gray-600"
          />
        </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl font-semibold text-[#040354] max-sm:text-center">
            REPORTS
          </h1>
        </div>
        <div className="flex gap-8 justify-center max-lg:flex-wrap">
          {ButtonLabel.map((label, idx) => {
            return (
              <button
                key={idx}
                className={`btn rounded-full w-full p-2 ${
                  idx === selected
                    ? "bg-[#040354] text-white hover:bg-[#040354]"
                    : "btn-outline hover:bg-[#040354] hover:text-white text-gray-600"
                }`}
                onClick={() => handleClick(idx)}
              >
                {DisplayLabels[idx]}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideCards;
