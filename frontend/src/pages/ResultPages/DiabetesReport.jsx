import { json, useLocation } from "react-router-dom";
import CommingSoon from "../../components/DashboardCards/CommingSoon";
import TitleCard from "../../components/DashboardCards/TitleCard";
import { useState } from "react";
import Markdown from "react-markdown";

const displayData = {
  age: "Age (in years)",
  sex: "Sex",
  cp: "Chest pain type",
  trestbps: "Resting Blood Pressure",
  chol: "Serum Cholesterol in mg/dl",
  fbs: "Fasting Blood Sugar > 120 mg/dl",
  restecg: "Resting ECG Results",
  thalach: "Maximum Heart Rate",
  exang: "Exercise-Induced Angina",
  oldpeak: "ST depression induced by exercise comparative to rest",
  slope: "Slope of the peak exercise ST segment",
  ca: "Number of major vessels which are colored by fluoroscopy",
  thal: "Value of thal",
  datetime: "Date and Time",
};

function formatName(str) {
  // Split the string at underscores
  const parts = str.split("_");

  // Capitalize the first letter of each word (except the last one)
  const formattedParts = parts.map((part, index) =>
    index !== parts.length - 1
      ? part.charAt(0).toUpperCase() + part.slice(1)
      : part
  );

  // Join the formatted parts back with spaces
  return formattedParts.join(" ");
}

const formattedString = formatName("compactness_worst");
console.log(formattedString); // Output: Compactness Worst

const DiabetesReport = () => {
  const location = useLocation();
  const search = location.search;
  const searchParams = new URLSearchParams(search);
  const path = searchParams.get("path");
  const data = JSON.parse(searchParams.get("data"));
  const analysis = JSON.parse(searchParams.get("resD"));
  console.log("🚀 ~ DiabetesReport ~ analysis:", analysis);

  const getHeading = (path) => {
    switch (path) {
      case "/":
      case "/heart":
        return "Heart Disease Prediction";
      case "/diabetes":
        return "Diabetes Prediction";
      case "/breastCancer":
        return "Breast Cancer Prediction";
      case "/kidney":
        return "Kidney Disease Prediction";
      case "/liver":
        return "Liver Disease Prediction";
      case "/malaria":
        return "Malaria Prediction";
      case "/pneumonia":
        return "Pneumonia Prediction";
      default:
        return "Medical Insights";
    }
  };

  const [heading, setHeading] = useState(getHeading(path));

  return (
    <>
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
        <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
          <h1 className="text-2xl font-bold text-[#040354]">
            {heading} Analysis
          </h1>
        </div>
      </div>
      {path === "/" || path === "/heart" ? (
        <div className="gap-8 grid-cols-5 grid max-md:grid-cols-2 max-lg:grid-cols-3">
          {Object.entries(data).map(([key, val]) => (
            <TitleCard
              key={key}
              first={formatName(displayData[key])}
              second={val}
            />
          ))}
        </div>
      ) : (
        <div className="gap-8 grid-cols-5 grid max-md:grid-cols-2 max-lg:grid-cols-3">
          {Object.entries(data).map(([key, val]) => (
            <TitleCard key={key} first={formatName(key)} second={val} />
          ))}
        </div>
      )}
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
        <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
          <h1 className="text-2xl font-bold text-[#040354]">Conclusion</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#040354]">
        <Markdown>{analysis}</Markdown>
        </div>
      </div>
    </>
  );
};

export default DiabetesReport;
