const express = require("express");
const { createWorkout, getAllWorkouts, getWorkouts, deleteWorkout, updateworkout } = require("../controllers/workoutControllers");
//import workout model from Models folder
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth) //we use it at the beginning because we want to protect our other CRUD methods, the next function in the requireAuth will fire the next method after token verification is completed

//get all workouts
router.get("/", getAllWorkouts);

//Get a single workout
router.get("/:id", getWorkouts);

//Post a new workout
router.post("/", createWorkout);

//Delete a new workout
router.delete("/:id", deleteWorkout
);

//Update a  workout
router.patch("/:id", updateworkout);

module.exports = router;