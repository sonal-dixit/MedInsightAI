import { Tooltip } from "antd";

const Card7 = ({ data1, data2, sameCIN }) => {
  const selectedFields = [
    "Company Class",
    "Company Category",
    "Age (Incorp. Date)",
    "Last AGM Date",
    "Balance Sheet Date",
    "Company SubCategory",
    "Company Industry",
    "PAN",
    "LEI",
    "Listing Status",
  ];

  const combinedData = {};
  selectedFields.forEach((field) => {
    combinedData[field] = data1?.[field] || "-";
  });

  combinedData["PAN"] = data2?.pan;
  combinedData["LEI"] = data2?.lei?.number;
  combinedData["Listing Status"] = data2?.status;

  const groupedFields = [];

  for (let i = 0; i < selectedFields.length; i += 2) {
    const pair = [
      combinedData[selectedFields[i]],
      combinedData[selectedFields[i + 1]],
    ];
    groupedFields.push(pair);
  }

  if (selectedFields.length % 2 !== 0) {
    groupedFields.push([
      combinedData[selectedFields[selectedFields.length - 1]],
      "-",
    ]);
  }

  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-6">
      {groupedFields?.map((fields, index) => (
        <div
          key={index}
          className={`p-4 grid grid-cols-2 gap-8 w-full max-md:grid-cols-1 rounded-xl ${
            index % 2 === 0 ? "bg-[#CDD2FF]" : "bg-gray-100"
          }`}
        >
          {fields?.map((value, idx) => {
            return (
              <div key={idx} className="flex gap-2 w-full">
                <span className="font-bold text-[#040354]">
                  {selectedFields[idx + index * 2]}:{" "}
                </span>
                {!sameCIN && selectedFields[idx + index * 2] === "PAN" ? (
                  <Tooltip title={"Buy to unlock"} placement="topLeft">
                    <span className="text-gray-700 blur-sm select-none">
                      XXXXXXXXXX
                    </span>
                  </Tooltip>
                ) : (
                  <span className="text-gray-700">{value || "-"}</span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
export default Card7;
