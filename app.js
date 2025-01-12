const express = require("express");
const indexRouter = require("./routes/indexRouter");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App live on port ${PORT}.`);
});