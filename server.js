const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/htmlRoute.js")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});