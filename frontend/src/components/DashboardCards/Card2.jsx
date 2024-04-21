const Card2 = ({ data }) => {
  const selectedFields = [
    "Authorized Capital",
    "Paid up Capital",
    "Company Status",
    "Active Compliance",
  ];

  return (
    <div className="flex gap-14 w-full max-xl:grid-cols-2 max-xl:grid px-10 max-sm:p-0">
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8 text-[#040354] w-full max-sm:p-4">
        <span className="">AUTHORIZED CAPITAL</span>
        <span className="font-bold">
          {data?.[selectedFields[0]]
            ? data[selectedFields[0]].match(/\(([^)]+)\)/)
              ? data[selectedFields[0]].match(/\(([^)]+)\)/)?.[1] ||
                data[selectedFields[0]]
              : data[selectedFields[0]] || "-"
            : "-"}
        </span>
      </div>
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8 text-[#040354] w-full max-sm:p-4">
        <span className="">PAID UP CAPITAL</span>
        <span className="font-bold">
          {data?.[selectedFields[1]]
            ? data[selectedFields[1]].match(/\(([^)]+)\)/)
              ? data[selectedFields[1]].match(/\(([^)]+)\)/)?.[1] ||
                data[selectedFields[1]]
              : data[selectedFields[1]] || "-"
            : "-"}
        </span>
      </div>
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8 text-[#040354] w-full max-sm:p-4">
        <span className="">COMPANY STATUS</span>
        <span
          className={`${
            (data?.[selectedFields[2]]?.toUpperCase() === "ACTIVE"
              ? "text-green-600"
              : "text-red-600") ?? "text-red-600"
          } font-bold`}
        >
          {data?.[selectedFields[2]]?.toUpperCase() || "-"}
        </span>
      </div>
      <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8 text-[#040354] w-full max-sm:p-4">
        <span className="">ACTIVE COMPLIANCE</span>
        <span
          className={`${
            data?.[selectedFields[3]]?.toUpperCase().split(" ")[0] === "ACTIVE"
              ? "text-green-600"
              : "text-red-600"
          } font-bold`}
        >
          {data?.[selectedFields[3]]?.toUpperCase().split(" ")[0] || "-"}
        </span>
      </div>
    </div>
  );
};

export default Card2;
