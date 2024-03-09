const express = require("express")

const router = express.Router()

const {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  } = require("../../controllers/workoutController");

router.get("/", getAllWorkouts)

router.get("/:workoutId", getOneWorkout)

router.post("/", createNewWorkout)

router.patch("/:workoutId", updateOneWorkout)

router.delete("/:workoutId", deleteOneWorkout)

module.exports = router;