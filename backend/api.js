const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
//connect mongodb
mongoose.connect("mongodb://localhost/shopping_cart",{ useNewUrlParser: true,useCreateIndex:true});
const bodyParser=require('body-parser');
let adminRoute=require('./routes/admin');
let frontRoute=require('./routes/front');

app.use(cors());
app.use(bodyParser.json());
app.use('/',adminRoute);
app.use('/',frontRoute);
app.use('/images',express.static('attach'));
//define api
app.listen(4567,function()
{
    console.log("Working on port 4567");
})