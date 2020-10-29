const route = require("express").Router();

const path = require("path");

route.get("/exercise", )

route.get('/exercise', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    response.sendFile(path.join(__dirname, "../public/exercise.html"))
    // respond with: response.send()
});

route.get('/stats', function (request, response) {
    // get all body stuff from request.body object
    // get all request parameter stuff from request.params object
    response.sendFile(path.join(__dirname, "../public/stats.html"))
    // respond with: response.send()

});

module.exports = route;