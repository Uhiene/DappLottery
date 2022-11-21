import Identicon from "react-identicons";
const Main = ({ users }) => {
  return (
    <div className="w-5/6 text-slate-400 rounded-2xl mb-10 shadow-[#242833] shadow-lg">
      <div className="flex justify-between items-end w-full bg-[#242833] h-24 p-4 px-6">
        <p className="w-1/3">Wallet</p>
        <p className="w-1/3 text-end">Numbers</p>
        <p className="w-1/3 text-end">Time</p>
        <p className="w-1/3 text-end">Matches</p>
        <p className="w-1/3 text-end">Prize</p>
      </div>
      {users.map((p, i) => (
        <div
          className={`flex justify-between bg-[${
            i % 2 == 0 ? "#1e222e" : "#242833"
          }]  items-end w-full p-4 px-6`}
          key={i}
        >
          <div className="flex space-x-4 w-1/3 text-end">
            <p>{p.wallet} </p>
            <Identicon
              string={"0x2f79duf8oyc" + i}
              size={20}
              className="rounded-lg shadow-md shadow-[#60a5fa]"
            />
          </div>

          <div className="flex w-1/3 justify-end space-x-3">
            <p>{p.ticketNum}</p>
            <div className="flex text-end text-black space-x-1">
              <p className="bg-gray-300 p-1 px-2 rounded-full text-xs">0</p>
              <p className="bg-orange-300 p-1 px-2 rounded-full text-xs">5</p>
              <p className="bg-slate-300 p-1 px-2 rounded-full text-xs">1</p>
              <p className="bg-blue-300 p-1 px-2 rounded-full text-xs">8</p>
              <p className="bg-red-300 p-1 px-2 rounded-full text-xs">9</p>
            </div>
          </div>
          <p className="w-1/3 text-end">{p.time}</p>
          <p className="w-1/3 text-end">{p.matches}</p>
          <p className="w-1/3 text-end text-yellow-300">
            {p.prices}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
