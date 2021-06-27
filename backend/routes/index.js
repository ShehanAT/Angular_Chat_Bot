var router = require('express').Router();

router.get("/", function(req, res){
    res.send("Hello from backend!");
});


module.exports = router;