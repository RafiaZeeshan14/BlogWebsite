const mongoose = require('mongoose');

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

module.exports = dbConnect;
