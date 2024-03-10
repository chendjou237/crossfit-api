// In src/services/workoutService.js
const Workout = require("../database/Workout")

const {v4:uuid} = require("uuid")

const getAllWorkouts = () => {
 const workouts = Workout.getAllWorkouts()
    return workouts;
  };
  
  const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout, 
      id: uuid(),
      createdAt: new Date().toLocaleString("en-us", {timeZone:"UTC"}),
      updtedAt: new Date().toLocaleString("en-us", {timeZone:"UTC"}),
    }
    const createdWorkout = Workout.createNewWorkouts(workoutToInsert)
    return createdWorkout;
  };
  
  const updateOneWorkout = (workoutId, body) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId,body);
    return updatedWorkout;
  };
  
  const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);

  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };