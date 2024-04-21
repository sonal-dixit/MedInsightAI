import PlaceholderCard from "./PlaceholderCard";
const Card1 = ({ heading, primary, text }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
      <div className="flex text-lg gap-8 max-lg:gap-2 items-center max-lg:grid-cols-1 max-lg:grid">
        <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
        {primary && (
          <p className="flex gap-1 items-center">
            <span className="font-semibold">{primary[0]}: </span>
            <span>{primary[1]}</span>
          </p>
        )}
      </div>
      {text ? (
        <p className="text-gray-700 text-justify break-words leading-7">
          {text || ""}
        </p>
      ) : (
        <PlaceholderCard />
      )}
    </div>
  );
};

export default Card1;
