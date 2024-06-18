import React from 'react';

const MealDetails = ({ meal, onSelect }) => {
    return (
        <div className="meal-details flex flex-col justify-center text-center bg-[#0f0f0f] mb-4 py-8 rounded-lg shadow-md">
            <h4 className="font-bold">{meal.name}</h4>
            <div className='grid grid-cols-2 justify-center mt-4'>
                <p>Calories / gram :</p>
                <p>{meal.calories}</p>
                <p>Protein :</p>
                <p>{meal.protein}%</p>
                <p>Carbo :</p>
                <p>{meal.carbohydrates}%</p>
                <p>Fats :</p>
                <p>{meal.fats}%</p>
            </div>
            <button onClick={onSelect} className="btn-primary mx-40 py-1 rounded-md mt-4">Select</button>
        </div>
    )
}

export default MealDetails