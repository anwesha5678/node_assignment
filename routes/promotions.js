const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();
const mongoose = require('mongoose');
const Promotions = mongoose.model('promotionsAll');


promotionsRouter.all('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

promotionsRouter.post('/', (req, res, next) => {
    let promotions = new Promotions();
    let { name,
        image,
        label,
        price,
        description } = req.body
    console.log(req.body)
    promotions.name = name
    promotions.image = image
    promotions.label = label
    promotions.price = price
    promotions.description = description
    promotions.save((err, doc) => {
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

    // res.statusCode = 200;
    // res.send('Will Add the promotion details:'+ req.body.postname + 'With Salary:' + req.body.salary +'With location:' + req.body.location)
});


promotionsRouter.get('/', (req, res, next) => {
    Promotions.find((err, doc) => {
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

promotionsRouter.get('/:promoId', (req, res, next) => {
    Promotions.findById(req.params.promoId, (err, doc) => {
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

promotionsRouter.delete('/:promoId', (req, res, next) => {

    Promotions.findByIdAndRemove(req.params.promoId, (err, doc) => {
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

promotionsRouter.put('/:promoId', (req, res, next) => {
    let { name,
        image,
        label,
        price,
        description } = req.body
    Promotions.findOneAndUpdate({ promoId: req.params.promoId }, req.body, { new: true }, (err, doc) => {
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






module.exports = promotionsRouter;