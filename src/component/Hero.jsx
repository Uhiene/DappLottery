
const Hero = () => {
  return (
    <div className="bg-yellow-400 sm:bg-green-400 md:bg-blue-400 w-full sm:w-5/6 my-20 sm:flex sm:justify-between sm:space-x-40 sm:rounded-2xl px-5 py-10 sm:p-10">
      <div className="text-white rounded-2xl text-center">
        <h1 className="text-3xl mb-2">LOTTERY JACKPOT</h1>
        <p>
          PLAY FOR JUST <span className=" bg-red-400 p-1">$1.0!</span>
        </p>
        <p className="text-white bg-yellow-500 mt-8 w-40 p-2 text-3xl font-bold hidden">
          $100,000
        </p>
      </div>

      <div className=" bg-opacity-75 bg-yellow-500 p-5 rounded-3xl text-white auto text-center space-y-3 mt-5">
        <h1 className="text-sm">New Draw in</h1>
        <h1 className="text-3xl font-semibold">22hr:34m:56s</h1>
        <button className="bg-yellow-600 bg-opacity-25 px-8 p-2 rounded-xl">
          Buy a Ticket
        </button>
        <p className="text-sm font-medium">
          1 ticket for <span className="text-yellow-500">$1</span>
        </p>
      </div>

    </div>
  );
};

export default Hero;
