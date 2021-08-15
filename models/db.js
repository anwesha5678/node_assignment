const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeassignment', {useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
    if(!err){console.log('Mongodb Connection Succeded.')}
    else {console.log('Error in Db Connection:'+err)}
})

require('./promotions')
require('./leaders')