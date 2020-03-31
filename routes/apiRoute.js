var express = require("express");
var router = express.Router();
const Workout = require("../models/workout.js");


module.exports = function(app) {
  // middleware that is specific to this router
  router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    { new: true, runValidators: true }
  )
    .then(workouts => {
      res.json("id");
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(workouts => {
      // console.log(workouts)
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});
};
