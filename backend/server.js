const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const requestsRoute = require('./routes/requests');
const quotesRoute = require('./routes/quotes');
const reviewsRoute = require('./routes/reviews');
const statsRoute = require('./routes/stats');

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/requests', requestsRoute);
app.use('/api/quotes', quotesRoute);
app.use('/api/reviews', reviewsRoute);
app.use('/api/stats', statsRoute); // <- your new stats endpoint

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
