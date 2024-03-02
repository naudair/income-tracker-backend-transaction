const { Router } = require("express");
const { getTransactions, createTransaction } = require("../controller/incomeController");

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getTransactions);
transactionRoute.post("/create-transaction", createTransaction);

module.exports = { transactionRoute };
