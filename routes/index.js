var express = require('express');
var router = express.Router();
var con  = require("../db/connection")

router.get("/",function(req,res){
  const query = "SELECT * FROM empd";
  con.query(query , function(err,result){
    if(err) throw err;
    res.render("index",{emp:result})
  })
})



/* GET home page. */


module.exports = router;
