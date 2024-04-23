import { MdErrorOutline } from "react-icons/md";

const PlaceholderCard = () => {
  return (
    <div className="bg-[#DFE2FF] shadow-sm rounded-xl flex gap-2 p-4 items-center">
      <span className="text-red-600 text-xl">
        <MdErrorOutline />
      </span>
      We regret to inform you that no information is currently available for
      this particular aspect of the company
    </div>
  );
};

export default PlaceholderCard;
