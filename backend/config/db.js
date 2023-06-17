const mongoose = require('mongoose');


// Set up MongoDB connection
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/student_books', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit process with failure
    }
  };
  
  module.exports = connectDB;