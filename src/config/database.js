const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    // Log any errors that occur during the connection
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
