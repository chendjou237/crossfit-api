 
const DB = require("./db.json");
const {saveToDatabase} = require("./utils")



const getAllWorkouts = (filter) => {
  let workouts = DB.workouts;
 try {
   if(filter.mode){
     workouts = workouts.filter((workout) => workout.mode.toLowerCase().includes(filter.mode))
   }

   if(filter.equipment){
      workouts = workouts.filter((workout) => workout.equipment.includes(filter.equipment))
   }

   if(filter.page ){
    console.log(filter.page);
      const start = (filter.page - 1) * (filter.limit || 5);
      const end = filter.page * ( filter.limit|| 5);
      workouts = workouts.slice(start, end);
    }
    if(filter.sort){
      workouts = workouts.sort((a, b) => {
      if (filter.sort === "createdAt") {
          if(filter.sort[0] === "-"){
            return new Date(b.createdAt) - new Date(a.createdAt)
          }
          return new Date(a.createdAt) - new Date(b.createdAt)
      }
      if (filter.sort === "updatedAt") {
          if(filter.sort[0] === "-"){
            return b.updatedAt - a.updatedAt
          }
          return a.updatedAt - b.updatedAt  
      }
    })
    }
 
   return workouts
 } catch (error) {
  throw {
    status: error.status || 500,
    message: error.message || error
}
 }
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


/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */


module.exports = { getAllWorkouts, createNewWorkouts, deleteOneWorkout, updateOneWorkout, getOneWorkout };