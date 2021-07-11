var router = require('express').Router();
var runIntent = require("./dialogflow").runIntent;

router.post("/requestText", function(req, res){
    // var intentRequest = createSessionPath(req.params.projectId);
    // console.log(req.params.projectId);
    (async() => { 
        var result = await runIntent(req.body.projectId, req.body.requestText);
        return res.send(
            {
                "responseMessage": result.Response,
                "originalQuery": result.Query,
                "intent": result.intent
            });
    })()   
});

module.exports = router;