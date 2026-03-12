const express = require("express");
const router = express.Router();

router.get("/about",(req,res)=>{
    res.json({
        title:"Business Planning Strategy & Execution",
        description:"About company data",
        clientSatisfaction:85,
        financeConsulting:95
    });
});

module.exports = router;