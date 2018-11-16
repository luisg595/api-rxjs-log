const mongoose = require('mongoose')
const Log = mongoose.model('Logs')
const { subject } = require('../../rxjs/subjects/Log')

exports.index = function(req, res) {
    Log.find({}, function(err, log) {
        subject.next('Listing logs')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        res.json(log)
    })
}

exports.store = function(req, res) {
    const new_log = new Log(req.body)
    new_log.save(function(err, log) {
        subject.next('Creating log')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        subject.next(log)
        res.json(log)
    })
}

exports.show = function(req, res) {
    Log.findById(req.params.id, function(err, log) {
        subject.next('Listing log')
        if (err) {
            subject.next(err)
            res.send(err)
        }
        res.json(log)
    })
}