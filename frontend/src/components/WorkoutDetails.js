const WorkoutDetails = ({workout}) => {
    return (
        <div className="workout-details flex flex-col justify-center text-center bg-[#0f0f0f] mb-4 py-8 rounded-lg shadow-md">
            <h4 className="font-bold">{workout.title}</h4>
            <img></img>
            <div className='grid grid-cols-2 justify-center mt-4'>
                <p>Load (kg) :</p>
                <p>{workout.load}</p>
                <p>Reps :</p>
                <p>{workout.reps}</p>
            </div>
            <div class="flex items-center text-center justify-end mt-4 mr-[3rem]">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Done</label>
            </div>
        </div>
    )
}

export default WorkoutDetails