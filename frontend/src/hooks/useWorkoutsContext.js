import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from 'react'

export const useWorkoutsContext = () =>{
    const workout_context = useContext(WorkoutsContext)
    if(!workout_context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return workout_context
}