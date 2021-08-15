require('./models/db');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
let bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter')
const leadersRouter = require('./routes/leaders')
const promotionsRouter = require('./routes/promotions')


const hostname  = 'localhost';
const port = 3000;

const app = express();


app.listen(4000,()=>{
    console.log('listening on port 4000')
});
app.use(morgan('dev'));
app.use(bodyParser.json())


app.use('/dishes',dishRouter)
app.use('/leaders',leadersRouter)
app.use('/promotions',promotionsRouter)


app.use(express.static(__dirname+ '/public'))


app.use((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This Is An Express Server</h1></body></html>');
})