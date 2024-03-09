
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
   const workouts = workoutService.getAllWorkouts();
    res.send({status: "ok", data: workouts });
  };
  
  const getOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = (req, res) => {
    const {name, mode, equipment, exercises, trainerTips} = req.body;
    if(!name|| !mode||!equipment || !exercises || !trainerTips){
      return;
    }
    const newWorkout = {name, mode, equipment, exercises, trainerTips}
   const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data:createdWorkout});
  };
  
  const updateOneWorkout = (req, res) => {
    workoutService.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
  };
  
  module.exports= {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };