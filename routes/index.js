module.exports = function(app){

    app.get('/', function(req, res, next) {
        /*
        1. Determine format of data received.
        2. Parse data and log types of tags present in data. 
        */
        console.log('file received...processing.')
        res.send();
    });

}
