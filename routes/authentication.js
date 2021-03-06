const _ = require('lodash');
//let tokenFind = require('../utils/token')
const passport = require('passport');
const passportJwt = require('passport-jwt');
module.exports =async (req, res, next)=>{
    const token = req.headers['x-access-token']
    if(token){
        let tokenDetails = await tokenFind.checkAccessToken(token)
        if(tokenDetails){
            req.body = Object.assign(req.body,{userId:tokenDetails.id})
        }
        next()
    }
}