var express = require('express')
var router = express.Router()
const Workout = require("../models/workout.js");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/workouts', function (req, res) {
    Workout.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
});
router.post("/api/workouts", function(req, res) {
  Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
      console.log("err", err);
      res.json(err);
    });
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router


// module.exports = function(app) {

  // app.get("/api/workouts", function(req, res) {
  //   Workout.find()
  //   console.log("api/workouts hit successfully!")
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // app.post("/api/workouts", function(req, res) {
  //   Workout.create({})
  //     .then(data => res.json(data))
  //     .catch(err => {
  //       console.log("err", err);
  //       res.json(err);
  //     });
  // });
  
//   app.put("/api/workouts/:id", ({ params, body }, res) => {
//     Workout.findByIdAndUpdate(
//         params.id,
//         { $push: { exercises: body } },
//         { new: true, runValidators: true }
//     )
//         .then(data => res.json(data))
//         .catch(err => {
//             console.log("err", err)
//             res.json(err)
//         })
// });
// app.get("/api/workouts/range", function (req, res) {
//     Workout.find({})
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// });
// };
