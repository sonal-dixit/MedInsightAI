import React from "react";

const TitleCard = ({ first, second }) => {
  return (
    <div className="bg-[#5b5aa5] shadow-sm rounded-xl flex flex-col gap-4 p-6 text-white max-sm:p-4 w-full">
      <span className="font-bold">{first}</span>
      <span className="">{second}</span>
    </div>
  );
};

export default TitleCard;
