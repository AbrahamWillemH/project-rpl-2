import { useEffect } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Workouts = () => {
    const {workouts, dispatch} = useWorkoutsContext() 

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])
    return(
        <div className="home">
            <div className="workouts grid grid-cols-3 gap-14 px-24 py-24">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout = {workout} />
                ))}
            </div>
        </div>
    )
}

export default Workouts