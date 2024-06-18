import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user, dispatch } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    if (user) {
      setHeight(user.height || '');
      setWeight(user.weight || '');
    }
  }, [user]);

  const calculateBMI = (height, weight) => {
    if (!height || !weight) return 'N/A';
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi === 'N/A') return 'N/A';
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obese';
    return 'N/A';
  };

  const handleSave = async (e) => {
    e.preventDefault();
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
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsEditing(false);
    }
  };

  const bmi = calculateBMI(height, weight);
  const bmiCategory = getBMICategory(bmi);

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
            <p className="text-xl">{height} cm</p>
            <p className="text-xl">Weight :</p>
            <p className="text-xl">{weight} kg</p>
            <p className="text-xl">BMI :</p>
            <p className="text-xl">{bmi}</p>
            <p className="text-xl">BMI Category :</p>
            <p className="text-xl">{bmiCategory}</p>
          </div>
          <button 
            onClick={() => setIsEditing(true)} 
            className="mt-4 bg-white text-[#000000] px-4 py-2 rounded-md">
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
