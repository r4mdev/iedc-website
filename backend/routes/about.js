const express = require("express");
const router = express.Router();

router.get('/', function(req,resp){
    resp.render("./pages/about");
});

module.exports = router