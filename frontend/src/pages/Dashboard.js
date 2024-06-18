import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const {user} = useAuthContext()
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10 font-bold text-4xl">
        <p><span>{user.username}'s</span> Dashboard</p>
        <div className="w-3/4 h-[1px] bg-white mt-4"></div>
      </div>
      <div className="grid grid-cols-3 gap-10 justify-center items-center text-center py-14 px-32">
        <div className="col-span-3 bg-[#d6aa27] rounded-md py-10">
          <p className='font-semibold text-2xl'>STATS</p>
          <div className='grid grid-cols-2 gap-2 justify-center mt-4'>
            <p className='text-xl'>Height :</p>
            <p className='text-xl'>171,9cm</p>
            <p className='text-xl'>Weight :</p>
            <p className='text-xl'>67,76kg</p>
            <p className='text-xl'>BMI :</p>
            <p className='text-xl'>22,9 (Normal)</p>
          </div>
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className='font-semibold text-2xl'>WORKOUTS</p>
          <div className='grid grid-cols-2 justify-center mt-10'>
            <p>Total Workouts :</p>
            <p>10</p>
          </div>
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className='font-semibold text-2xl'>CALORIES</p>
          <div className='grid grid-cols-2 justify-center mt-4'> 
            <p>Burned: </p>
            <p>123cal</p>
            <p>Gain: </p>
            <p>123cal</p>
          </div>
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className='font-semibold text-2xl'>ARTICLES</p>
          <div className='grid grid-cols-2 justify-center mt-10'> 
            <p>Read :</p>
            <p>17 articles</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;