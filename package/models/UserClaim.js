const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userClaimSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mongooseUsers',
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

module.exports = mongoose.model('mongooseUserClaims', userClaimSchema);

