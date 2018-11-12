//NPM imports
let express = require('express');

//Local imports
let apiRoutes = require('./api-routes');

let app = express();

var port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send('API with nodejs, Express and mongoDB');
});

app.listen(port, function (params) {
    console.log('Running service on port - ', port);
});

app.use('/api', apiRoutes);