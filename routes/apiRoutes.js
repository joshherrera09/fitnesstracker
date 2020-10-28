const route = require("express").Router();

const Workout = require("../models/workout.js");

route.post('/api/workouts', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.create({})
        .then(dbWorkout => {
            response.json(dbWorkout)
        }).catch(err => {
            response.json(err)
        });
});

app.put('/api/workouts/:id', function ({ body, params}, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercise: body}},
        { new: true, runValidators: true}
    ).then(dbWorkout => {
        response.json(dbWorkout);
    }).catch(err => {
        response.json(err)
    });
});

route.get('/api/workouts', function(request, response) {
    Workout.find()
        .then(dbWorkouts => {
            response.json(dbWorkouts)
        }).catch(err => {
            escape.json(err)
        });
});

app.get('/api/workouts/range', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            response.json(dbWorkouts)
        }).catch(err => {
            response.json(err)
        });
});