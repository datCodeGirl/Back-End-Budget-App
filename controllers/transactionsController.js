const express = require("express");
const transactionsController = express.Router();
const transactionsArray = require("../models/transaction.js");
const { trace } = require("../app.js");

// A ROUTE THAT EXIST TO READ ALL TRANSACTIONS
transactionsController.get("/", (req, res)=> {
    res.send(transactionsArray)
})

//A ROUTE EXISTS TO READ A SINGLE TRANSACTION
transactionsController.get("/:id", (req, res)=> {
    const id = req.params.id
    const transaction = transactionsArray.find(ele => ele.id === Number(id)) 
    console.log(id);
    res.send(transaction);
})

//A ROUTE EXISTS TO CREATE NEW TRANSACTIONS

transactionsController.post("/", (req, res) => {
  const newTransaction = {id: transactionsArray.length + 1, ...req.body};
      transactionsArray.push(newTransaction);
     res.status(201).send(newTransaction);
});

//A ROUTE EXISTS TO UPDATE A SINGLE TRANSACTION
transactionsController.put("/:id" , (req, res) => {
    const { id } = req.params;
    const updatedTransaction = transactionsArray.find(transaction => transaction.id === +id);
    if (updatedTransaction) {
        Object.assign(updatedTransaction, req.body);
        res.status(200).json(updatedTransaction);
    }else {
       res.status(404).send({ error: `Transaction with id: ${id} not found!`})
    }
});

//A ROUTE EXISTS TO DELETE A SINGLE TRANSACTION
    transactionsController.delete("/:id", (req, res) => {
        const { id } = req.params;
        const transactionIndex = transactionsArray.findIndex(transaction => transaction.id === +id) 

        if (transactionIndex !== -1)  {
       const deletedTransaction = transactionsArray.splice(transactionIndex,  1) ;

         res.status(200).json(deletedTransaction[0]);
        } else {
    res.status(404).send({error: `Transaction with id: ${id} not found!`});
     }
    })

 








module.exports = transactionsController;