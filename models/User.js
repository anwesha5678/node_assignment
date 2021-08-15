let mongoose = require('mongoose');
let schema = mongoose.Schema;
let userSchema = new Schema({
    username:{
        type:string,
        required:true,
    },
    password:{
        type:string,
        required:true,
    }
})
module.exports = mongoose.model('users', userSchema, 'users')