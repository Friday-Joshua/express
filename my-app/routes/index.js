var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(`<h1>Welcome to Home page</h1>`);
});

router.get("/about",async (req,res)=>{
  res.send(`<h1>About Us Page</h1>`);
})

module.exports = router;
