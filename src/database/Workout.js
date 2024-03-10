 
const DB = require("./db.json");
const {saveToDatabase} = require("./utils")

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkouts = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name == newWorkout.name) > -1;
  if(isAlreadyAdded){
    return;
  }
   DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
}

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId)
  if (!workout){
    return;
  }
  return workout;
}

const updateOneWorkout = (workoutId, body) => {
  const indexOfUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if(indexOfUpdate === -1){
    return ;
  }
  const updatedWorkout = {
    ...DB.workouts[indexOfUpdate],
    changes
  }
  DB.workouts[indexOfUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
}

const deleteOneWorkout = (workoutId) => {
  const exist = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if(exist === -1){
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB)

}
module.exports = { getAllWorkouts, createNewWorkouts, deleteOneWorkout, updateOneWorkout, getOneWorkout };