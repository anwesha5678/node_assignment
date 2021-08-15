const mongoose = require('mongoose');

let promotionsSchema = new mongoose.Schema({
    "name":{
        type:String
    },
    "image":{
        type:String
    },
    "label":{
        type:String
    },
    "price":{
        type:String
    },
    "description":{
        type:String
    }
});

mongoose.model('promotionsAll',promotionsSchema)