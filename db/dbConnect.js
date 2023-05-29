
// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  try {
    // Establish the connection to MongoDB
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

    // Set the createIndexes method
    mongoose.connection.once('open', () => {
      mongoose.connection.createIndex('yourModel', { yourField: 1 }, { unique: true });
    });

    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  }
}

module.exports = dbConnect;