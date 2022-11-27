import React from "react";
import { GiTicket } from "react-icons/gi";

const Header = () => {
  return (
    <div className="bg-[#383c47] py-4 px-4 sm:px-8 flex justify-between">
      <div className="flex items-center text-lg sm:text-2xl">
        <h1 className="text-white">DappLottery</h1>
        <GiTicket className="text-slate-500" />
      </div>
      <button className="bg-[#6b728094] rounded-2xl px-2 py-1 border border-slate-200 text-sm sm:text-md text-white">
        Connect Wallect
      </button>
    </div>
  );
};

export default Header;
