import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import imgSrc from "../assets/CircularLoader.svg";
import toast from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const fetchData = async (cn, type) => {
  const myHeaders = {
    accept: "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/json; charset=UTF-8",
  };
  const raw = JSON.stringify({
    company: cn.trim(),
    type: type === "llp" ? "LLP" : "company",
  });
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_SUGGESTIONS,
      raw,
      {
        headers: myHeaders,
      }
    );
    const parsedData = response?.data?.content?.result?.map((item) =>
      item.split(";")
    );
    return parsedData;
  } catch (error) {
    toast.error(
      "Our servers are not working right now. Please try again later."
    );
  }
};

const SearchBox = ({
  companyName,
  setCompanyName,
  setCIN,
  inputStyle,
  isSticky,
  setSearchType,
  searchType,
}) => {
  const [displayName, setDisplayName] = useState(companyName || "");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(
    "Search Company by Name"
  );
  const options = [
    { label: "Search Company by Name", type: "company", disabled: false },
    { label: "Search LLP by Name", type: "llp", disabled: true },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (displayName.trim().length === 0) {
      setSuggestions([]);
    }
  }, [displayName]);

  const fetchSuggestions = async (query) => {
    try {
      setLoading(true);
      const data = await fetchData(query, searchType);
      setLoading(false);
      if (!data || data.length === 0) {
        setSuggestions([]);
        setError(true);
      } else {
        setSuggestions(data);
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    if (
      e.target.value === "" ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setCompanyName("");
      setCIN("");
    }
    setDisplayName(e.target.value.toUpperCase());
    setSuggestions([]);
    setError(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") fetchSuggestions(e.target.value.toUpperCase());
    }
  };

  const handleSuggestionClick = (requiredData) => {
    setDisplayName(requiredData[1]);
    setCompanyName(requiredData[1]);
    setCIN(requiredData[2]);
    setSuggestions([]);
  };

  const handleSelectOption = (idx) => {
    setSelectedOption(options[idx].label);
    setSearchType(options[idx].type);
    setCompanyName("");
    setCIN("");
    setDisplayName("");
    setIsOpen(false);
  };

  const inputStyle1 = {
    boxSizing: "border-box",
    borderRadius: "8pt",
    border: "1px solid transparent",
    background:
      "linear-gradient(black, black) padding-box, linear-gradient(180deg, #909BF9, #EA9595) border-box",
    color: "white",
    borderTopRightRadius: 0,
  };

  return (
    <div className={`${isSticky ? "w-2/6 max-md:w-full" : ""} relative`}>
      <div className="flex w-full" style={inputStyle}>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="flex w-36 bg-transparent px-2 text-sm font-medium text-gray-400 h-14 items-center justify-between rounded-md shadow-sm"
            onClick={() => {
              toggleDropdown();
              setSuggestions([]);
            }}
          >
            {selectedOption}
            <FaAngleDown />
          </button>

          {isOpen && (
            <div
              className="absolute right-0 w-36 shadow-lg bg-black"
              style={inputStyle1}
            >
              <div className="flex flex-col gap-1 p-1">
                {options?.map((option, index) => (
                  <>
                    <button
                      key={index}
                      className="text-sm text-center text-gray-400 hover:bg-gray-600 hover:cursor-pointer disabled:cursor-not-allowed"
                      onClick={() => handleSelectOption(index)}
                      disabled={option?.disabled}
                    >
                      {option?.label}
                    </button>
                    {index !== options.length - 1 && (
                      <span className="w-full h-0.5 bg-gray-600" />
                    )}
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="border-r-2 border-gray-600" />
        <div className="relative w-full flex items-center">
          {loading && (
            <img src={imgSrc} className="w-10 absolute right-0 top-2" />
          )}
          <CiSearch className="w-6 h-6 ml-2 text-gray-400" />
          <input
            type="text"
            className="input input-bordered shadow h-full w-full bg-transparent pr-10 -ml-2"
            placeholder="Enter Company Name"
            required
            value={displayName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            id="searchBox"
          />
        </div>
      </div>
      <p className="text-red-500 text-sm pl-2">
        {error && "Company Not Found"}
      </p>
      {suggestions?.length >= 1 && (
        <div
          className="mt-1 bg-[#080808] border flex flex-col rounded-lg p-2 absolute"
          style={inputStyle}
          id="suggestions"
        >
          {suggestions?.map((suggestion, index) => (
            <div
              key={index}
              className={`p-2 hover:bg-[#909BF950] text-gray-300 ${
                index === suggestions.length - 1 ? null : "border-b"
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: "pointer" }}
            >
              {suggestion[1]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
