const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
