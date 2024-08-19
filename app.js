const express = require("express");
const cors = require("cors");

const storeRoute = require("./Route/userRouter");

const databaseConnection = require("./Services/connectDB");

//Calling dependencies
databaseConnection();
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Middleware

app.use("/api/user", storeRoute);

//Litening at port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
