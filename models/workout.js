//Importing mongoose dependency
const mongoose = require("mongoose");
//creating workout schema.
const Schema = mongoose.Schema;
//Workout schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  //Creating functionality for the exercises.
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }

});
//Workout model.
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;