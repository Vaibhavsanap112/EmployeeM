var express = require('express');
const { route } = require('.');
var router = express.Router();
const con = require("../db/connection")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/edit/:id',function(req,res){
  const id = req.params.id;

  const query = 'SELECT * FROM empd WHERE id = ?';
  con.query(query, [id], (err, result) => {
    if (err) throw err;
    res.render('edit', { emp: result[0] });
  });
  router.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const { name, email, dob, gender, designation } = req.body;

  const query = 'UPDATE empd SET name=?, email=?, dob=?, gender=?, designation=? WHERE id=?';
  con.query(query, [name, email, dob, gender, designation, id], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});
})
router.get('/add',function(req,res){
  res.render("add")
})
router.post('/add',function(req,res){
  const {id , name ,email , dob , gender , designation} = req.body;
  const sql = 'INSERT INTO empd (id, name,email,dob,gender,designation) VALUES(?,?,?,?,?,?)';
  con.query(sql,[id,name,email,dob,gender,designation],(err,result)=>{
    if(err){
      console.error("Error inserting data:", err);
      return res.status(500).send("Database error");

    }
    res.redirect("/")
  })

})
    module.exports = router;
