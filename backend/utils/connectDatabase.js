const mongoose = require('mongoose')

const connectDatabase = async () => {
    res = await mongoose.connect("mongodb+srv://anudari:anudari0112@cluster0.hk79mx6.mongodb.net/income-tracker")
    if (res) console.log("database connected")
}

module.exports = connectDatabase