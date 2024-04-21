import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomepageBody from "../components/HomepageBody";
import img9 from "../assets/homepage/9.webp";
import img1 from "../assets/homepage/12.webp";
import HeartForm from "../components/HeartForm";
import { Tab, Tabs } from "@nextui-org/react";
import BreastCancerForm from "../components/BreastCancerForm";
import DiabetesForm from "../components/DiabetesForm";
import KidneyForm from "../components/KidneyForm";
const HeadingFromTop = () => {
  return (
    <motion.h1
      className="font-bold z-10 pointer-events-none select-none max-sm:text-[40px] text-[60px]"
      style={{
        backgroundImage: "linear-gradient(0deg, #909BF9, #EA9595)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 40 }}
    >
      MedInsightAI:
    </motion.h1>
  );
};

const NewHome = () => {
  const navigate = useNavigate();
  const [heartData, setHeartData] = useAtom(heartDataAtom);
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const sectionRef = useRef(null);
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = Object.entries(formData).filter(
      ([key, value]) => value === ""
    );

    if (missingFields.length === 0) {
      setHeartData(formData);
      navigate("/loading/");
    } else {
      const missingFieldNames = missingFields.map(([key, value]) => key);
      const errorMessage = `Please fill in the following fields: ${missingFieldNames.join(", ")}`;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col w-full -mt-12">
      <div
        className="bg-cover w-full pb-12 relative max-sm:pb-16"
        ref={sectionRef}
      >
        <div
          style={{ backgroundImage: `url(${img9})` }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-[2px] opacity-40 h-full w-full"
        />
        <section className="flex justify-between items-center max-sm:mt-0 max-sm:px-4 px-24 pt-8 max-sm:pt-0">
          <div className="flex flex-col gap-2 text-[#c5c5c5] max-sm:gap-2">
            <HeadingFromTop />
            <span className="max-sm:text-[36px] text-[60px] z-10 pointer-events-none select-none">
              Revolutionizing Medical Insights
            </span>
            <p className="text-xl z-10 leading-9 pointer-events-none select-none max-sm:text-sm">
              From Numbers to Insights: Get the best Pre-consultation <br />
              Insights about your health reports in
              <br />
              Clarity and Simplicity
            </p>
          </div>
          <img
            src={img1}
            className="max-sm:hidden z-10 h-72 pointer-events-none select-none opacity-80"
            loading="lazy"
            alt="img"
          />
        </section>
        <section className="flex flex-col justify-center items-center max-sm:mt-0 z-10">
          <>
          <Tabs>
            <Tab key="1" title="Heart Disease Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[100]">
  <HeartForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="2" title="Diabetes Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[10]">
  <DiabetesForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="3" title="Breast Cancer Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[10]">
  <BreastCancerForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="4" title="Kidney Disease Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[10]">
  <KidneyForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="5" title="Liver Disease Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[100]">
  <HeartForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="6" title="Malaria Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[100]">
  <HeartForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
            <Tab key="7" title="Pneumonia Prediction">

            <div className="flex flex-col gap-4 mt-6 max-sm:px-4 w-full max-lg:w-full max-md:px-8 max-lg:px-24 z-[100]">
  <HeartForm formData={formData} setFormData={setFormData}/>
</div>

            </Tab>
          </Tabs>
          </>
          <button
            className="btn w-48 glow-on-hover mt-8 z-10"
            onClick={handleSubmit}
          >
            Predict
          </button>
        </section>
      </div>

      <HomepageBody handleClick={scrollToSection} />
    </div>
  );
};

export default NewHome;