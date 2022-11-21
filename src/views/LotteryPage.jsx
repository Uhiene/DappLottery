import Hero from '../component/Hero';
import Main from '../component/Main'
import { useGlobalState } from '../store';

const LotteryPage = () => {
  const [users] = useGlobalState("users");
  return (
    <div>
      <div className="bg-[#14171b] flex flex-col items-center">
        <Hero />
        <Main users={users} />
        <div className=''></div>
      </div>
      
    </div>
  );
}

export default LotteryPage