const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter your exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter the name of your exercise"
                },
                duration: {
                    type: Number,
                    required: "Please enter the duration of the exercise in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
   
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;