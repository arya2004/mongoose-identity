const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleClaimSchema = new Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mongooseRoles',
        required: true,
      },
    claimType: {
         type: String ,
         required: false
        },
    claimValue: {
         type: String, 
         required: falses
        },
});

module.exports  = mongoose.model('mongooseRoleClaims', roleClaimSchema);

