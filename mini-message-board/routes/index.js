var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages, title: "Mini Message Board" });
  console.log(req.params)
});

router.get('/new', function(req, res) {
  res.render('new', {})
})

router.post('/new', function(req, res) {
  console.log(req)
  // res.redirect('/')
})

module.exports = router;
