const mongoose = require('mongoose');

const connectToDatabase = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database:', error.message);
    }
};

module.exports = connectToDatabase;