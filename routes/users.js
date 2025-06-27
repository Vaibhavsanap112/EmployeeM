var express = require('express');
const { route } = require('.');
var router = express.Router();

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
    module.exports = router;
