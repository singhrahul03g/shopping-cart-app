const express=require('express');
router=express.Router();
let userLogin = require('../db/userlogin');
let sha1=require('sha1');
router.post('/api/loginuser',function(req,res)
{
    let email=req.body.email;
    let password=sha1(req.body.password);
    userLogin.find({'email':email,'password':password},function(err,data)
    {
       if(err){}
       else if(data.length==0){
           res.json({'err':1,'msg':'Email or password is not correct'})
       }
       else{
           res.json({'err':0,'msg':'login success','uid':email});
       }
    })
})

router.post('/api/reguser',function(req,res)
{
    let email=req.body.email;
    let password=sha1(req.body.password);
    // insert data 
    let ins=new userLogin({'email':email,'password':password});
    ins.save(function(err)
    {
        if(err){
            res.json({'err':1,'msg':'Some error'})
        }
        else
        {
            res.json({'err':0,'msg':'Data daved'})
        }
    })
})
module.exports= router;

