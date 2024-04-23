import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import HomepageBody from "../components/HomepageBody";
import img9 from "../assets/homepage/9.webp";
import img1 from "../assets/homepage/12.webp";
import HeartForm from "../components/HeartForm";
import BreastCancerForm from "../components/BreastCancerForm";
import DiabetesForm from "../components/DiabetesForm";
import KidneyForm from "../components/KidneyForm";
import axios from "axios";

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
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData({});
    setPath(location.pathname);
  }, [location]);
  
  // const [heartData, setHeartData] = useAtom(heartDataAtom);
  
  const sectionRef = useRef(null);
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/predict",
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        const stingdata = JSON.stringify(formData);
        const result = JSON.stringify(response.data);
        navigate("/loading" + "?data=" + stingdata + "&path=" + path + "&result=" + result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHeading = () => {
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
          <div className="flex flex-col gap-4 mt-6 max-sm:px-4 max-lg:w-full max-md:px-8 max-lg:px-24 z-[100] w-1/2">
            <h1 className="text-white-50 text-4xl font-semibold text-center">
              {getHeading()}
            </h1>
            {(path === "/heart" || path === "/") && (
              <HeartForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/diabetes" && (
              <DiabetesForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/breastCancer" && (
              <BreastCancerForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/kidney" && (
              <KidneyForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/liver" && (
              <HeartForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/malaria" && (
              <HeartForm formData={formData} setFormData={setFormData} />
            )}
            {path === "/pneumonia" && (
              <HeartForm formData={formData} setFormData={setFormData} />
            )}
          </div>
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
