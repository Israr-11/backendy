const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const databaseConnection = async () => {
  try {
    const options = {
      dbName: process.env.DATABASE_NAME,
    };                       

    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, options, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connected to Database..");

  } catch (error) {
    throw error;
  }
};                

module.exports = databaseConnection;
