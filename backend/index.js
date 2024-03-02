const express = require("express");
const cors = require("cors");
const connectDatabase = require("./utils/connectDatabase");
const { userRoute } = require("./routes/transactionRoute");
const { transactionRoute } = require("./routes/transactionRoute");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

connectDatabase();
app.use(transactionRoute);
  
app.listen(port, () => {
  console.log(`your backend server is running on ${port}`);
});
