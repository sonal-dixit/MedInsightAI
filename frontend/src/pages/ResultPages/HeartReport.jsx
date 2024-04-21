import TitleCard from "../../components/DashboardCards/TitleCard";
// import { useAtom } from "jotai";
// import { heartDataAtom } from "../../states/states";

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
const HeartReport = () => {
  // const [heartData] = useAtom(heartDataAtom);
  return (
    null
    // <>
    //   <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
    //     <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
    //       <h1 className="text-2xl font-bold text-[#040354]">
    //         Cardiovascular Analysis
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="gap-8 grid-cols-5 grid max-md:grid-cols-2 max-lg:grid-cols-3">
    //     {Object.entries(heartData).map(([key, data]) => (
    //       <TitleCard key={key} first={displayData[key]} second={data} />
    //     ))}
    //   </div>
    //   <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
    //     <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
    //       <h1 className="text-2xl font-bold text-[#040354]">Conclusion</h1>
    //     </div>
    //     <p className="text-[#040354]">
    //       Risk factors:<br/>
    //       <br/>
    //       Age: 55 years - While not the highest risk factor, age is a significant indicator for heart disease, and your age puts you in a somewhat higher risk category.<br/>
    //       Sex: Male - Males are generally at higher risk for heart disease compared to females, contributing to your overall risk profile.<br/>
    //       Chest pain type: 2 (angina) - This significantly increases your risk, as angina is a symptom of narrowed coronary arteries, a major contributor to heart disease.<br/>
    //       Serum cholesterol: 220 mg/dl - This level is considered high and further increases your risk.<br/>
    //       Exercise-induced angina: No - While not present here, experiencing chest pain during exertion is a strong indicator of potential heart complications.<br/>
    //       ST depression induced by exercise: 1.5 - This finding can be indicative of ischemia (reduced blood flow) in the heart muscle, which can be a sign of coronary artery disease.<br/>
    //       Slope of the peak exercise ST segment: 2 - This finding can also be concerning, suggesting potential underlying issues.<br/>
    //       Number of major vessels colored by fluoroscopy: 0 - This is a positive indicator, as it suggests no blockage in the major coronary arteries.<br/>
    //       Value of thal: 2 - Thallium stress testing results can be complex and require interpretation from a medical professional.<br/>
    //       <br/>
    //       Pointers:<br/>
    //       <br/>
    //       Based on the information provided, you have several risk factors for heart disease.<br/>
    //       However, the presence of these factors does not necessarily mean you have heart disease.<br/>
    //       It is critical to consult a qualified physician for a comprehensive evaluation, including additional tests and a detailed medical history.<br/>
    //       The physician can then provide an accurate diagnosis and personalized treatment plan if necessary.
    //     </p>
    //   </div>
    // </>
  );
};

export default HeartReport;
