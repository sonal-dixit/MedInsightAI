import img2 from "../assets/homepage/2.webp";
import img3 from "../assets/homepage/3.webp";
import img4 from "../assets/homepage/4.webp";
import img13 from "../assets/homepage/441.svg";
import img16 from "../assets/homepage/444.svg";
import img17 from "../assets/homepage/1.png"

const LeftImage = ({
  imgSrc,
  heading,
  subheading1,
  subheading2,
  text1,
  text2,
}) => {
  return (
    <div className="flex justify-between items-center px-32 w-full py-12 max-sm:px-4">
      <img src={imgSrc} alt="img" className="h-full" loading="lazy" />
      <div className="flex flex-col gap-4 w-1/3 max-sm:w-2/3">
        <span className="text-2xl font-bold text-[#040354]">{heading}</span>
        <p className="text-gray-700">
          <span className="font-semibold text-black">{subheading1}</span>
          {text1}
        </p>
        {subheading2 && text2 && (
          <p className="text-gray-700">
            <span className="font-semibold text-black">{subheading2}</span>
            {text2}
          </p>
        )}
      </div>
    </div>
  );
};

const RightImage = ({
  imgSrc,
  heading,
  subheading1,
  subheading2,
  text1,
  text2,
}) => {
  return (
    <div className="flex justify-between items-center bg-[#E7E8F4] px-32 w-full py-12 max-sm:px-4">
      <div className="flex flex-col gap-4 w-1/3 max-sm:w-2/3">
        <span className="text-2xl font-bold text-[#040354]">{heading}</span>
        <p className="text-gray-700">
          <span className="font-semibold text-black">{subheading1}</span>
          {text1}
        </p>
        {subheading2 && text2 && (
          <p className="text-gray-700">
            <span className="font-semibold text-black">{subheading2}</span>
            {text2}
          </p>
        )}
      </div>
      <img src={imgSrc} alt="img" className="h-full" loading="lazy" />
    </div>
  );
};

const HomepageBody = ({ handleClick }) => {
  const inputStyle = {
    boxSizing: "border-box",
    borderRadius: "8pt",
    border: "3px solid transparent",
    background:
      "linear-gradient(white,white) padding-box, linear-gradient(35deg, #909BF9, #EA9595) border-box",
    color: "black",
  };
  return (
    <div className="w-full bg-white flex flex-col justify-center">
      <div className="flex flex-col h-64 items-center justify-center gap-4">
        <span className="text-3xl text-center text-gray-700">
        Enhancing Pre-consultation Patient Insights through Advanced Analytics
        </span>
        <span className="text-3xl font-bold text-[#040354]">
          Our Core Solutions
        </span>
      </div>
      <RightImage
        imgSrc={img2}
        heading="Empowering Cardiovascular Health: "
        subheading1="Detecting Heart Disease: "
        text1="Gain valuable insights into heart disease detection."
        subheading2="Predicting Heart Disease Risk: "
        text2="Access advanced risk prediction and reporting capabilities for proactive healthcare management."
      />
      <LeftImage
        imgSrc={img3}
        heading="Revolutionizing Respiratory Health: "
        subheading1="Chest X-ray Analysis: "
        text1="Our Lung Disease Detection System analyzes X-ray images for early identification and risk assessment. Leveraging advanced imaging, it provides crucial insights into potential lung diseases, aiding in proactive healthcare."
      />
      <RightImage
        imgSrc={img4}
        heading="Enlightening potential Diabetes risks: "
        subheading1="Blood sugar related analysis: "
        text1="Evaluating and providing the insights for blood sugar tests."
        subheading2="In-depth Diabetes analysis: "
        text2="Diabetes risk prediction and type detection."
      />
      <div className="flex font-bold text-3xl gap-1 mt-20 justify-center w-full">
        <span className="text-[#040354]">Why Choose</span>
        <h1
          style={{
            backgroundImage: "linear-gradient(180deg, #0E1BBA, #E77341)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MedInsightAI?
        </h1>
      </div>
      <div
        className="bg-[#E7E8F4] w-full relative grid grid-cols-2 place-items-center py-8 px-24 max-sm:grid-cols-2 max-sm:px-4"
        style={{
          background:
            "linear-gradient(180deg, white 0, white 30%, #E7E8F4 30%, #E7E8F4 70%, white 70%, white 100%)",
        }}
      >
        <img
          src={img13}
          alt="img"
          className="my-8 max-sm:my-0"
          loading="lazy"
        />
        <img
          src={img16}
          alt="img"
          className="my-8 max-sm:my-0"
          loading="lazy"
        />
      </div>
      <div className="bg-[#03024B] w-full flex justify-between pr-32 pl-48 py-12 max-sm:justify-center max-sm:px-4">
        <div className="flex flex-col gap-14 max-sm:gap-8">
          <p className="text-4xl text-white">
            Unlock the pre consulation insights
            <br /> of your health reports today.
          </p>
          <button
            className="btn w-fit"
            style={inputStyle}
            onClick={handleClick}
          >
            Predict Now
          </button>
        </div>
        <img src={img17} alt="img" className="max-sm:hidden w-[500px]" />
      </div>
    </div>
  );
};

export default HomepageBody;
