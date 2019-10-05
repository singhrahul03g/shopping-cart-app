/* product schema */
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pro = new Schema({
    cname:{type:String,required:true},
    pname:{type:String,unique:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    features:{type:String,required:true},
    image:{type:String,required:true},
    created_at:{type:Date,default:Date.now()}
});
module.exports = mongoose.model('product',pro);