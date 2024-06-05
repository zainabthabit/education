const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const education = await mongoose.connect(process.env.blog);
    console.log(`db is connected : ${education.connection.host}`);
  } catch (error) {
    console.log(`something went wrong while connecting to db: ${error}`);
  }
};

module.exports = connectDB;
