import { Tooltip } from "antd";

const Card3 = ({ heading, subHeadings, values, sameCIN }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
      <div className="grid grid-cols-4 gap-4 mt-4 w-full max-md:grid-cols-1 ">
        {subHeadings.map((subHeading, index) => (
          <div key={index} className="flex flex-col gap-2 w-full">
            <span className="font-bold text-[#040354]">{subHeading}</span>
            {!sameCIN && subHeading === "Website" ? (
              <Tooltip title={"Buy to unlock"} placement="topLeft">
                <span className="text-gray-700 blur-sm select-none">
                  https://dummy.com
                </span>
              </Tooltip>
            ) : (
              <span className="text-gray-700">{values[index] || "-"}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;
