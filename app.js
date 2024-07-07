const express = require("express") //libraries dont need a path
const app = express();
const transactionsController = require("./controllers/transactionsController");
app.use(express.json());
app.use("/transactions", transactionsController)



app.get("/" , (req, res) => {
    res.send("Hello World!!");
})


module.exports = app;