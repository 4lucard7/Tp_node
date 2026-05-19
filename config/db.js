const mongoose = require("mongoose");



module.exports = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connect to mongoDb :)")
    } catch (error) {
        console.error(error);
        
    }
}