const mongooseRoles = require("./models/Role")

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/i', {
 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const role = new mongooseRoles({name: "rtes"})
role.save()