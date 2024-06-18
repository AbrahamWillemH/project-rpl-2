import { useEffect } from "react";
import WorkoutDetails from '../components/WorkoutDetails';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Workouts = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const { user, dispatch: authDispatch } = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }
                const json = await response.json();
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, [dispatch]);

    const handleFinishWorkout = async () => {
        try {
            const response = await fetch(`/api/user/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ workoutsDone: user.workoutsDone + 1 })
            });

            if (!response.ok) {
                throw new Error('Failed to finish workout');
            }

            const updatedUser = await response.json();
            authDispatch({ type: 'LOGIN', payload: updatedUser });
        } catch (error) {
            console.error('Error finishing workout:', error);
        }
    };

    return (
        <div className="home">
            <div className="workouts grid grid-cols-3 gap-14 px-24 py-24">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleFinishWorkout}
                    className="btn-primary text-white px-4 py-2 rounded-md mt-8"
                >
                    Finish
                </button>
            </div>
        </div>
    );
};

export default Workouts;
