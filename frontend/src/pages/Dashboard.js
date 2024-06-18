import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user, dispatch } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [height, setHeight] = useState(user ? user.height : '');
  const [weight, setWeight] = useState(user ? user.weight : '');

  // Function to calculate BMI
  const calculateBMI = (height, weight) => {
    if (!height || !weight) return 'N/A'; // Return N/A if height or weight is missing
    const heightInMeters = height / 100; // Convert height from cm to m
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
  };

  // Function to handle form submission
  const handleSave = async (e) => {
    e.preventDefault();
    // Make API request to update user data
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({ height, weight })
    });

    if (response.ok) {
      const updatedUser = await response.json();
      dispatch({ type: 'LOGIN', payload: updatedUser });
      setIsEditing(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10 font-bold text-4xl">
        <p><span>{user ? user.username : 'User'}</span>'s Dashboard</p>
        <div className="w-3/4 h-[1px] bg-white mt-4"></div>
      </div>
      <div className="grid grid-cols-3 gap-10 justify-center items-center text-center py-14 px-32">
        <div className="col-span-3 bg-[#d6aa27] rounded-md py-10">
          <p className="font-semibold text-2xl">STATS</p>
          <div className="grid grid-cols-2 gap-2 justify-center mt-4">
            <p className="text-xl">Height :</p>
            <p className="text-xl">{user ? user.height : 'Height'} cm</p>
            <p className="text-xl">Weight :</p>
            <p className="text-xl">{user ? user.weight : 'Weight'} kg</p>
            <p className="text-xl">BMI :</p>
            <p className="text-xl">{user ? calculateBMI(user.height, user.weight) : 'BMI'}</p>
          </div>
          <button 
            onClick={() => setIsEditing(true)} 
            className="mt-4 bg-white text-[#000] text-white px-4 py-2 rounded-md">
            Edit
          </button>
          {isEditing && (
            <form onSubmit={handleSave} className="mt-4">
              <div className="grid grid-cols-2 gap-2 justify-center">
                <p className="text-xl">Height (cm):</p>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  className="text-black px-2 rounded-md ml-[240px] text-center w-1/4"
                />
                <p className="text-xl">Weight (kg):</p>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  className="text-black px-2 rounded-md ml-[240px] text-center w-1/4"
                />
              </div>
              <button 
                type="submit" 
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
                Save
              </button>
            </form>
          )}
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className="font-semibold text-2xl">WORKOUTS</p>
          <div className="grid grid-cols-2 justify-center mt-10">
            <p>Total Workouts :</p>
            <p>{user ? user.workoutsDone : 'Workouts'}</p>
          </div>
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className="font-semibold text-2xl">CALORIES</p>
          <div className="grid grid-cols-2 justify-center mt-4"> 
            <p>Burned: </p>
            <p>{user ? user.caloriesBurned : 'CaloriesBurned'}</p>
            <p>Gain: </p>
            <p>{user ? user.caloriesGained : 'CaloriesGained'}</p>
          </div>
        </div>
        <div className="col-span-1 bg-[#0f0f0f] rounded-md py-10">
          <p className="font-semibold text-2xl">ARTICLES</p>
          <div className="grid grid-cols-2 justify-center mt-10"> 
            <p>Read :</p>
            <p>{user ? user.articlesRead : 'ArticlesRead'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
