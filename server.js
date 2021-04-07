const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'))

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", 
  {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex: true,
  useFindAndModify: false
  }
);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});