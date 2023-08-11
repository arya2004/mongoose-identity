const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userClaimSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mongoose_user',
        required: true
    },
    claimType: { 
        type: String ,
        required: false
    },
    claimValue: { 
        type: String,
        required: false 
    },
});

module.exports = mongoose.model('mongoose_user_claim', userClaimSchema);

