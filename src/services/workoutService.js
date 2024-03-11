// In src/services/workoutService.js
const Workout = require("../database/Workout")

const {v4:uuid} = require("uuid")

const getAllWorkouts = (filter) => {
 try {
  const workouts = Workout.getAllWorkouts(filter)
     return workouts;
 } catch (error) {
  throw error;
 }
  };
  
  const getOneWorkout = (workoutId) => {
    try {
      const workout = Workout.getOneWorkout(workoutId);
      return workout;
    } catch (error) {
      throw error;
    }
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout, 
      id: uuid(),
      createdAt: new Date().toLocaleString("en-us", {timeZone:"UTC"}),
      updtedAt: new Date().toLocaleString("en-us", {timeZone:"UTC"}),
    }
    try {
      const createdWorkout = Workout.createNewWorkouts(workoutToInsert);
      return createdWorkout;
    } catch (error) {
      throw error;
    }
  };
  
  const updateOneWorkout = (workoutId, body) => {
    try {
      const updatedWorkout = Workout.updateOneWorkout(workoutId,body);
      return updatedWorkout;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteOneWorkout = (workoutId) => {
try {
      Workout.deleteOneWorkout(workoutId);
  
} catch (error) {
  throw error;
}
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };