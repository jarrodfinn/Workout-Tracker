const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
});

const workoutSchema = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
