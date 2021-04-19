//Installing dependencies
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//MongoDB connecting
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker", { useNewUrlParser: true });
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Fitness-Tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
//Getting the Routes.
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
//Listening to the server.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});