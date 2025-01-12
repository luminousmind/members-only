const { Router } = require("express");
const executeSQL = require("../db/queries");
const router = Router();

router.get("/", async (req, res) => {
    const messages = await executeSQL(
        `
            SELECT * FROM messages;
        `
    );
        
    console.log(messages);

    res.render("index");
});

module.exports = router;