const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user.js');
const stadiumRoutes = require('./routes/stadium.js');  

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/stadiums', stadiumRoutes); 

mongoose.connect(process.env.MONGODB_URI, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
