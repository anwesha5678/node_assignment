const mongoose = require('mongoose');

let leadersSchema = new mongoose.Schema({
    "name":{
        type:String
    },
    "image":{
        type:String
    },
    "designation":{
        type:String
    },
    "abbr":{
        type:String
    },
    "description":{
        type:String
    }
});

mongoose.model('leadersAll',leadersSchema)