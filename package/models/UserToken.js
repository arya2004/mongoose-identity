const mongoose = require('mongoose');

const userTokenSchema = new mongoose.Schema({
  UserId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'mongooseUsers', 
    required: true 
    },
  LoginProvider: { 
    type: String, 
    required: true 
    },
  Name: { 
    type: String, 
    required: true 
},
  Value: { 
    type: String ,
    required: false
},
});

const UserTokenModel = mongoose.model('mongooseUserTokens', userTokenSchema);

module.exports = UserTokenModel;