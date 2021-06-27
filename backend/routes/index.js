var router = require('express').Router();

router.use(function(err, req, res, next){
  res.send("Hello from backend!");
});

module.exports = router;