const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Routes
const authRoutes = require('./routes/authRoutes');
const leaveApplicationRoutes = require('./routes/leaveApplicationRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/leave-applications', leaveApplicationRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});