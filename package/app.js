const mongoose_role = require("./models/Role")

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/qq', {
 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const role = new mongoose_role({name: "kek"})
role.save()