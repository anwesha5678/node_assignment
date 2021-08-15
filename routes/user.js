const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
const verifyOrdinaryUser = require('./authentication');
const userRouter = express.Router();



userRouter.get('/',  verifyOrdinaryUser,(req, res, next) => {
    let admin = req.user;
    res.write('Updating the dish: '+admin)
    res.end('Will update with the user:'+admin );
});

module.exports = userRouter;