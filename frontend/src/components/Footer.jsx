import logo from "../assets/logo-dark.png";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#111] w-full px-12 flex flex-col gap-2 pt-6 max-sm:pt-8 mt-auto">
      <div className="flex max-sm:justify-center justify-between max-sm:flex-col max-md:text-sm max-sm:text-xs max-sm:gap-8 items-center">
        <div className="flex flex-col gap-6 max-sm:gap-1 text-[#FFD5C3] items-center">
          <img src={logo} alt="productlogo" width={200} />
        </div>
        <div className="flex flex-col gap-2 text-white max-sm:flex-row max-sm:justify-center">
          <div className="flex gap-2 items-center">
            <IoMail className="text-[#FFD5C3] text-xl" />
            <a href="mailto:shivamch1704@gmail.com">Designed and Developed by: Shivam Choudhary and Sonal Dixit</a>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm text-center mb-2">
        © 2024 ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
