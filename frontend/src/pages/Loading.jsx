import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import imgg2 from "../assets/loading.mp4";
import imgg1 from "../assets/loading.webm";
import axios from "axios";

const AnimatedLoadingText = () => {
  return <p id="loading-text" className="text-center font-bold"></p>;
};

const Heading = () => {
  return (
    <h1
      className="text-center font-bold z-10 pointer-events-none select-none mt-5 max-sm:text-[40px] text-[60px]"
      style={{
        backgroundImage: "linear-gradient(135deg, #909BF9, #EA9595)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Please wait while AI is <br />
      working on your report
    </h1>
  );
};

const Loading = () => {
  const navigate = useNavigate(false);
  const [resD, setD] = useState("");
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  useEffect(() => {
    const getGPTResponse = async (data) => {
      const res = await axios.get(
        "https://gemini-8phb.onrender.com/api/ask?prompt=" + data
      );
      console.log(res.data);
      navigate(
        "/report" + window.location.search + "&resD=" + JSON.stringify(res.data)
      );
    };
    getGPTResponse(
      searchParams.get("data") +
        "tell in detail about each feature in medical terms and what do you infer from this, give in proper markdown format"
    );
    // setTimeout(() => {
    //   navigate('/report'+window.location.search);
    // }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-16 w-full items-center min-h-screen">
      <div className="w-[600px] h-[600px] bg-[#909BF924] absolute top-[50px] rounded-full blur-[133px] max-sm:w-[300px] max-sm:h-[300px]" />
      <div
        className="w-[300px] h-[600px] bg-[#AC867636] absolute top-[200px] left-0 blur-[133px] max-sm:hidden"
        style={{
          borderBottomRightRadius: "600px",
          borderTopRightRadius: "600px",
        }}
      />
      <div
        className="w-[300px] h-[600px] bg-[#AC867636] absolute top-[200px] right-0 blur-[133px] max-sm:hidden"
        style={{
          borderBottomLeftRadius: "600px",
          borderTopLeftRadius: "600px",
        }}
      />
      <Heading />
      <div className="flex flex-col gap-4">
        <video width={250} loop autoPlay muted>
          <source src={imgg1} type="video/webm" />
          <source src={imgg2} type="video/mp4" />
        </video>
        <AnimatedLoadingText />
      </div>
    </div>
  );
};

export default Loading;
