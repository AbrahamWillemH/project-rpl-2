import { useEffect } from "react"
import MealDetails from '../components/MealDetails'
import { useMealsContext } from "../hooks/useMealsContext"

const Meals = () => {
    const {meals, dispatch} = useMealsContext()

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('/api/meals')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MEAL', payload: json})
            }
        }

        fetchMeals()
    }, [dispatch])
    return(
        <div className="home">
            <div className="meals grid grid-cols-3 gap-14 px-24 py-24">
                {meals && meals.map((meal) => (
                    <MealDetails key={meal._id} meal = {meal} />
                ))}
            </div>
        </div>
    )
}

export default Meals