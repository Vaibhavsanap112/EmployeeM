var express = require('express');
const { route } = require('.');
var router = express.Router();
const con = require("../db/connection")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/edit',function(req,res){
  res.render("edit")
})
router.get('/add',function(req,res){
  res.render("add")
})
router.post('/add',function(req,res){
  const {id , name ,email , date , gender , nation} = req.body;
  const sql = 'INSERT INTO empd (id, name,email,date,gender,designation) VALUES(?,?,?,?,?,?)';
  con.query(sql,[id,name,email,date,gender,designation],(err,result)=>{
    if(err){
      console.error("Error inserting data:", err);
      return res.status(500).send("Database error");

    }
    res.send("Employee added successfully");
  })

})
    module.exports = router;
