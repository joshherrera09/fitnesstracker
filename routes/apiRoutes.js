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

route.put('/api/workouts/:id', function ({ body, params }, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body }},
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

route.get('/api/workouts/range', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.find({}).limit(5)
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            response.json(dbWorkouts)
        }).catch(err => {
            response.json(err)
        });
});

route.delete('/api/workouts', function ({ body }, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        response.json(true);
    }).catch(err => {
        response.json(err)
    });
});

module.exports = route;

