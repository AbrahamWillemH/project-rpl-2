import React, { useEffect } from "react";
import MealDetails from '../components/MealDetails';
import { useMealsContext } from "../hooks/useMealsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Meals = () => {
    const { meals, dispatch } = useMealsContext();
    const { user, dispatch: authDispatch } = useAuthContext();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('/api/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const json = await response.json();
                dispatch({ type: 'SET_MEAL', payload: json });
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, [dispatch]);

    const handleSelectMeal = async (mealId, calories) => {
        try {
            // Example PUT request to update user's caloriesGained
            const response = await fetch(`/api/user/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ caloriesGained: user.caloriesGained += calories })
            });

            if (!response.ok) {
                throw new Error('Failed to update calories gained');
            }

            const updatedUser = await response.json();

            // Optionally update localStorage and user context
            localStorage.setItem('user', JSON.stringify(updatedUser));
            authDispatch({ type: 'LOGIN', payload: updatedUser });

        } catch (error) {
            console.error('Error selecting meal:', error);
        }
    };

    return (
        <div className="home">
            <div className="meals grid grid-cols-3 gap-14 px-24 py-24">
                {meals && meals.map((meal) => (
                    <MealDetails key={meal._id} meal={meal} onSelect={() => handleSelectMeal(meal._id, meal.calories)} />
                ))}
            </div>
        </div>
    );
};

export default Meals;
