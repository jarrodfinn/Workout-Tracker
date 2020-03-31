var path = require("path");
var express = require("express");
var router = express.Router();

// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
