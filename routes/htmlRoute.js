var path = require("path");

// module.exports = function (app){

//     app.get("/", function(req,res){
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     app.get("/exercise", function (req,res){
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

//     app.get("/stats", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });

// }

var express = require("express");
var router = express.Router();
// const Workout = require("../models/workout.js");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  router.get("/workout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/workout.html"));
  });
  
module.exports = router;