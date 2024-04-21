import TableDisplayWithHeader from "../TableDisplayWithHeader";
import { strippedTableModifierLight } from "../../utils/utils.js";
const Card5 = ({ data, heading }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
      {Array.isArray(data) ? (
        <TableDisplayWithHeader
          data={data}
          strippedTableModifierLight={strippedTableModifierLight}
        />
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default Card5;
