let router = require('express').Router();

router.get('/', function (req, resp) {
    resp.json({
        status: 'API Its Working',
        message: 'API with nodejs, Express and mongoDB',
    });
});

module.exports = router;