var express = require('express');
var router = express.Router();

var TimeConfig = require('../models/timeConfig');

router.post('/', function (req, res, next) {
    var timeConfig = new TimeConfig ({
        time: req.body.time
    });
    timeConfig.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved timeConfig',
            obj: result
        });
    });
});


module.exports = router;