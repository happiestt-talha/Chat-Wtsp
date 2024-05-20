const express = require("express");
const connectDB = require("./db");
const app = express();
const port = 5000;

connectDB();
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`{Example app listening on port http://localhost:${port}`);
})