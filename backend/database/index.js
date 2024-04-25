const mongoose = require("mongoose");
const {MONGODB_CONNECTION_STRING} = require("../config/index");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Database connected to host: ${conn.connections[0].host}`);
  } catch (error) {
    console.log("Error");
  }
};

module.exports = dbConnect;
