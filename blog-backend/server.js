const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Database connection error:', err));

mongoose.connection.on('error', (err) => {
    console.error('MongoDB runtime error:', err);
    process.exit(1);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

