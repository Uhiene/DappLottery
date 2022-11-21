import logo from "../assets/avatar.png";
// import logo1 from "../assets/W.jpg";


const Hero = () => {
  return (
    <div className="bg-blue-400 w-5/6 my-20 flex relative rounded-2xl p-10">
      <div className="text-white rounded-2xl">
        <h1 className="text-3xl mb-2">LOTTERY JACKPOT</h1>
        <p>
          PLAY FOR JUST <span className="text-yellow-500">$1.00</span>!{" "}
        </p>
        <p className="text-white bg-yellow-500 mt-8 w-40 p-2 text-3xl font-bold">
          $100,000
        </p>
      </div>

      <div className="ml-20 bg-[#93cbfd8c] p-10 rounded-3xl text-white text-center space-y-3 object-contain">
        <h1 className="text-sm">New Draw in</h1>
        <h1 className="text-3xl font-semibold">22hr:34m:56s</h1>
        <button className="bg-[#a9d3f88c] px-8 p-2 rounded-xl">
          Buy a Ticket
        </button>
        <p className="text-sm font-medium">
          1 ticket for <span className="text-yellow-500">$1</span>
        </p>
      </div>

      <div className="absolute -right-4 -top-20">
        <img src={logo} alt="" />
      </div>
      {/* <img src={logo1} alt="" /> */}
    </div>
  );
};

export default Hero;
