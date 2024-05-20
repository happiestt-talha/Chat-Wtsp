const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/whatsapp";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected");
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = connectDB