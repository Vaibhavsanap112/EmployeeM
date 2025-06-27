var express = require('express');
var router = express.Router();
var con  = require("../db/connection")

router.get("/",function(req,res){
  const query = "SELECT * FROM students";
  con.query(query , function(err,result){
    if(err) throw err;
    res.render("index",{student:result})
  })
})

/* GET home page. */


module.exports = router;
