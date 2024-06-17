import { MealsContext } from "../context/MealContext";
import { useContext } from 'react'

export const useMealsContext = () =>{
    const meal_context = useContext(MealsContext)
    if(!meal_context) {
        throw Error('useMealsContext must be used inside a MealsContextProvider')
    }

    return meal_context
}