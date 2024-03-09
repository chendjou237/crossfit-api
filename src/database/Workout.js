 
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
  const newDB = DB.workouts.push(newWorkout);
  saveToDatabase(newDB);
  return newWorkout;
}

module.exports = { getAllWorkouts, createNewWorkouts };