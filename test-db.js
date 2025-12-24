const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env.local') });

const uri = process.env.MONGODB_URI;

console.log('Testing connection to:', uri ? uri.replace(/:([^@]+)@/, ':****@') : 'UNDEFINED');

if (!uri) {
    console.error('Error: MONGODB_URI is missing in .env.local');
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection error:', err);
        process.exit(1);
    });
