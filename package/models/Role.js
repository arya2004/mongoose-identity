const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    name:{
        type: String,
        required: false,
        maxLength: 256
        
    },
    normalizedName:{
        type: String,
        required: false,
        maxLength: 256

    },
    concurrencyStamp:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("mongoose_role", rolesSchema);

