const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userLoginSchema = new Schema({
    LoginProvider: { 
        type: String, 
        required: true 
    },
    ProviderKey: { 
        type: String, 
        required: true 
    },
    ProviderDisplayName: { 
        type: String,
        required: false
    },
    UserId: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'mongoose_user', 
        required: true 
    },
});

module.exports = mongoose.model('mongoose_user_login', userLoginSchema);

