// In src/services/workoutService.js
const Workout = require("../database/Workout")

const {v4:uuid} = require("uuid")

const getAllWorkouts = () => {
 const workouts = Workout.getAllWorkouts()
    return workouts;
  };
  
  const getOneWorkout = () => {
    return;
  };
  
  const createNewWorkout = () => {
    return;
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };