const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://assessment:assessment@cluster0.2w2iz.mongodb.net/Assessment?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error is on db.js', error);
    process.exit(1);
  }
}

module.exports = connectDB;