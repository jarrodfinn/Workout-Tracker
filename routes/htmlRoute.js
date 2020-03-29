var path = require("path");
var express = require("express");
var router = express.Router();

module.exports = function(app) {
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
};

module.exports = router;
