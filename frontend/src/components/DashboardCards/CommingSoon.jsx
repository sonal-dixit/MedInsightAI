import CommingSoonImg from "../../assets/Comingsoon.png";
const CommingSoon = ({ heading }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
      <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
        <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
      </div>
      <div className="flex justify-center">
        <img
          src={CommingSoonImg}
          alt="Comming Soon"
          className="w-[300px] h-auto"
        />
      </div>
    </div>
  );
};

export default CommingSoon;
