const mongoose = require("mongoose");
const { DB_URL } = require("./serverConfig");

async function connectToDB(){
    try {
        await mongoose.connect(DB_URL);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Unable to connect to db");
        console.log(error);
    }
}

module.exports = connectToDB;