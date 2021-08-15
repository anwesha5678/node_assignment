const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
const verifyAdmin = require('./authentication');



dishRouter.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})

dishRouter.post('/', verifyAdmin, (req, res, next) => {
    res.statusCode = 200;
    res.send('Will Add the dish:'+ req.body.name + 'With Details:' + req.body.description)
});

dishRouter.delete('/',verifyAdmin, (req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting All The Dishes!')
});

dishRouter.get('/:dishId', verifyAdmin, (req, res, next) => {
    res.statusCode = 200;
    res.end('Will Send Dishes of the dish:'+ req.params.dishId +' to you!');
});

dishRouter.get('/:dishId', verifyAdmin, (req, res, next) => {
    res.statusCode = 200;
    res.end('Will Send All The Dishes To You!')
});

dishRouter.put('/:dishId',  verifyAdmin,(req, res, next) => {
    res.statusCode = 200;
    res.write('Updating the dish: '+req.params.dishId)
    res.end('Will update the dish:'+req.body.name + 'With Details:'+ req.body.description);
});

dishRouter.put('/',  verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('Put Operation not supported on /dishes' );
});

dishRouter.delete('/:dishId', verifyAdmin, (req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting all the dishes!');
});


module.exports = dishRouter;