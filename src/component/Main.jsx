import Identicon from "react-identicons";
import { truncate } from "../store";
const Main = ({ users }) => {
  return (
    <div className="w-full sm:w-5/6 text-slate-400 rounded-2xl mb-2 shadow-[#242833] shadow-lg">
      <div className="flex justify-between items-end w-full bg-[#242833] h-24 p-4 sm:px-6 text-sm">
        <p className="w-1/5 sm:w-1/3 border-white border">Wallet</p>
        <p className="w-1/5 sm:w-1/3 border-white border text-end">Numbers</p>
        <p className="w-1/5 sm:w-1/3 border-white border text-end">Time</p>
        <p className="w-1/5 sm:w-1/3 border-white border text-end">Matches</p>
        <p className="w-1/5 sm:w-1/3 border-white border text-end">Prize</p>
      </div>
      {users.map((p, i) => (
        <div
          className={`flex justify-between bg-[${
            i % 2 == 0 ? "#1e222e" : "#242833"
          }]  items-end w-full p-4 sm:px-6 text-xs`}
          key={i}
        >
          <div className="flex space-x-1 sm:space-x-4 w-1/6 sm:w-1/3 text-end">
            <p>{truncate(p.wallet, 2, 4, 9)}</p>
            <Identicon
              string={"0x2f79duf8oyc" + i}
              size={17}
              className="rounded-lg shadow-md shadow-[#60a5fa]"
            />
          </div>

          <div className="flex sm:w-1/3 sm:space-x-3 border border-white">
            <p className="hidden sm:flex">{p.ticketNum}</p>
            <div className="flex text-end text-black space-x-0 text-xs">
              <p className="bg-gray-300 p-1 rounded-full">0</p>
              <p className="bg-orange-300 p-1 rounded-full">5</p>
              <p className="bg-slate-300 p-1 rounded-full">1</p>
              <p className="bg-blue-300 p-1 rounded-full">8</p>
              <p className="bg-red-300 p-1 rounded-full">9</p>
            </div>
          </div>
          <p className="w-14 sm:w-1/3 border-white border text-end">{p.time}</p>
          <p className="w-5 sm:w-1/3 border-white border text-end">
            {p.matches}
          </p>
          <p className="w-1/6 sm:w-1/3 border-white border text-end text-yellow-300">
            {p.prices}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
