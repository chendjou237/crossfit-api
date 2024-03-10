 
const DB = require("./db.json");
const {saveToDatabase} = require("./utils")

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkouts = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name == newWorkout.name) > -1;
  if(isAlreadyAdded){
    throw {
        status: 400,
        message: `the workout with name ${newWorkout.name} already exist`
    }
  }
   try {
    DB.workouts.push(newWorkout);
   saveToDatabase(DB);
   return newWorkout;
   } catch (error) {
    throw {
        status: error.status || 500,
        message: error.message || error
    }
   }
}

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId)
  if (!workout){
    throw {
        status: 400,
        message: "workout don't exist"
    }
  }
  return workout;
}

const updateOneWorkout = (workoutId, body) => {
  const indexOfUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if(indexOfUpdate === -1){
    throw {
        status: 400,
        message: "workout don't exist",
    }
  }
  const updatedWorkout = {
    ...DB.workouts[indexOfUpdate],
    changes
  }
 try {
     DB.workouts[indexOfUpdate] = updatedWorkout;
     saveToDatabase(DB);
     return updatedWorkout;
 } catch (error) {
    throw {
        status: error?.status || 500,
        message: error?.message || error,
    }
 }
}

const deleteOneWorkout = (workoutId) => {
  const exist = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if(exist === -1){
    throw {
        status: 400,
        message: "workout don't exist",
    }
  }try {
    
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB)
  
  } catch (error) {
    throw {
        status: error?.status || 500,
        message: error?.message || error,
    }
  }
}
module.exports = { getAllWorkouts, createNewWorkouts, deleteOneWorkout, updateOneWorkout, getOneWorkout };