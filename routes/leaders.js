const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();
const mongoose = require('mongoose');
const Leaders = mongoose.model('leadersAll');


leadersRouter.all('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

leadersRouter.post('/', (req, res, next) => {
    let leaders = new Leaders();
    let { name,
        image,
        designation,
        abbr,
        description } = req.body
    console.log(req.body)
    leaders.name = name
    leaders.image = image
    leaders.designation = designation
    leaders.abbr = abbr
    leaders.description = description
    leaders.save((err, doc) => {
        if (!err) {
            console.log(doc)
            res.json({
                statusCode: 200,
                data: doc
            })
        }
        else {
            console.log(err);
        }
    })
});

leadersRouter.delete('/:leaderId', (req, res, next) => {
    Leaders.findByIdAndRemove(req.params.leaderId, (err, doc) => {
        if (!err) {
            console.log(doc)
            res.json({
                statusCode: 200,
                data: doc
            })
        }
        else {
            console.log(err);
        }
    })
});

leadersRouter.get('/:leaderId', (req, res, next) => {
    Leaders.findById(req.params.leaderId, (err, doc) => {
        if (!err) {
            console.log(doc)
            res.json({
                statusCode: 200,
                data: doc
            })
        }
        else {
            console.log(err);
        }
    })
});

leadersRouter.get('/', (req, res, next) => {
    Leaders.find((err, doc) => {
        if (!err) {
            console.log(doc)
            res.json({
                statusCode: 200,
                data: doc
            })
        }
        else {
            console.log(err);
        }
    })
});





leadersRouter.put('/:leaderId', (req, res, next) => {
    let { name,
        image,
        designation,
        abbr,
        description } = req.body
    Leaders.findOneAndUpdate({ leaderId: req.params.leaderId }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            console.log(doc)
            res.json({
                statusCode: 200,
                data: doc
            })
        }
        else {
            console.log(err, 'err')

        }
    });
});



module.exports = leadersRouter;