const express = require("express")
const router = express.Router();

router.route("/").get((req,res) => {
    res.send(`Hello World from <h1>${req.baseUrl}<h1>`);
})

module.exports=router;