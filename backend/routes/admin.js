const express=require('express');
const multer=require('multer');
// To send mail
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'metest951@gmail.com',
      pass: 'metest123'
    }
  });
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  //end

//for uploading
let DIR="./attach";
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,DIR)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  })
  
  let upload = multer({ storage: storage }).single('Image');

//end uploading
router=express.Router();
let adminLogin=require('../db/adminlogin');
let catModel=require('../db/category');
let proModel=require('../db/products');
let sha1=require('sha1');
router.post('/api/loginadmin',function(req,res)
{
    let email=req.body.email;
    let password=sha1(req.body.password);
    adminLogin.find({'email':email,'password':password},function(err,data)
    {
       if(err){}
       else if(data.length==0){
           res.json({'err':1,'msg':'Email or password is not correct'})
       }
       else{
           res.json({'err':0,'msg':'login success','uid':email});
       }
    })
    // insert data 
    // let ins=new adminLogin({'email':email,'password':password});
    // ins.save(function(err)
    // {
    //     if(err){
    //         res.json({'err':1,'msg':'Some error'})
    //     }
    //     else
    //     {
    //         res.json({'err':0,'msg':'Data daved'})
    //     }
    // })
})
router.post('/api/changepassword',function(req,res)
{
    let op=sha1(req.body.op);
    let np=sha1(req.body.np);
    let uid=req.body.uid;
     adminLogin.findOne({'email':uid},function(err,data)
     {
         if(err){}
         else
         {
            if(op==data.password)
            {
                if(op==np)
                {
                    res.json({'err':1,'msg':'Op and np are same'})     
                }
                else
                {
            adminLogin.updateOne({'email':uid},{$set:{'password':np}},function(err)
            {
                if(err){}
                else
                {
                    //send mail
                var mailOptions = {
                    from: 'xyz@gmail.com',
                    to: 'rahulsingh10041998@gmail.com',
                    subject: 'Change password confirmation',
                    html: "<h1>Your Password change successfully<a href='http://localhost:4200/dashboard'>Click here</a></h1>"
                  };
                  transporter.sendMail(mailOptions, function(error, info)
                  {
                      if(error){
                          console.log(error)
                      }
                      else
                      {
                        res.json({'err':0,'msg':'Password Changed'})
                      }
                  })
                    
                }
            })
                }
            }
            else
            {
                res.json({'err':1,'msg':'Old Password is not correct'})
            }
         }
     })
})
router.post('/api/addcategory',function(req,res)
{
  upload(req,res,function(err)
  {
      if(err){
          res.json({'err':1,'msg':'Uploading Error'})
      }
      else
      {
        let cname=req.body.cname;
        let desc=req.body.description;
        let fname=req.file.filename;
        let ins=new catModel({'cname':cname,'description':desc,'image':fname})
        ins.save(function(err)
        {
            if(err){}
            else
            {
                res.json({'err':0,'msg':'Category Saved'})
            }
        })
      }
  })
})


router.post('/api/addproduct',function(req,res)
{
  upload(req,res,function(err)
  {
      if(err){
          res.json({'err':1,'msg':'Uploading Error'})
      }
      else
      {
        let cname=req.body.cname;
        let pname=req.body.pname;
        let price=req.body.price;
        let discount=req.body.discount;
        let sPrice = (price - (price*discount)/100);
        let features=req.body.features;
        let fname=req.file.filename;
        let ins = new proModel({'cname':cname,'pname':pname,'price':price,'discount':discount, 'sPrice':sPrice,  'features':features,'image':fname})
        ins.save(function(err)
        {
            if(err){}
            else
            {
                res.json({'err':0,'msg':`product saved ${sPrice}`})
            }
        })
      }
  })
})

router.get('/api/fetchproducts',function(req,res){
    proModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'pdata':data})
        }
    })
})


router.get('/api/fetchcat',function(req,res)
{
    catModel.find({},function(err,data)
    {
        if(err){}
        else
        {
            res.json({'err':0,'cdata':data})
        }
    })
})
router.get('/api/delcat/:cid',function(req,res)
{
    let cid=req.params.cid;
    catModel.deleteOne({'_id':cid},function(err)
    {
        if(err){}
        else
        {
            res.json({'err':0,'msg':'Category Deleted'})
        }
    })
})


router.get('/api/deleteproduct/:pid',function(req,res)
{
    let pid=req.params.pid;
    proModel.deleteOne({'_id':pid},function(err)
    {
        if(err){}
        else
        {
            res.json({'err':0,'msg':'Product Deleted'})
        }
    })
})

router.get('/api/getcatbyid/:cid',function(req,res)
{
   let cid=req.params.cid;
   catModel.find({'_id':cid},function(err,data)
   {
       if(err){}
       else{
           res.json({'err':0,'cdata':data})
       }
   })
})
//products
router.get('/api/latestproducts',function(req,res)
{
    proModel.find({},function(err,data)
    {
        if(err){}
        else
        {
            res.json({'err':0,'pdata':data})
        }
    })
})
router.get('/api/catproducts/:cn',function(req,res)
{
    let cn=req.params.cn;
    proModel.find({'cname':cn},function(err,data)
    {
        if(err){}
        else
        {
            res.json({'err':0,'pdata':data})
        }
    })
})
router.get('/api/productdetailsbyid/:pid',function(req,res)
{
    let pid=req.params.pid;
    proModel.findOne({'_id':pid},function(err,data)
    {
        if(err){}
        else
        {
            res.json({'err':0,'pdata':data})
        }
    })
})
module.exports=router;