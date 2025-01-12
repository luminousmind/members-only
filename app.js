const express = require("express");
const app = express();


const populatedb = require("./db/populatedb")
populatedb();

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
app.get("/", indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App live on port ${PORT}.`);
});