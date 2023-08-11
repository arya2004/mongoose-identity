const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleClaimSchema = new Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mongoose_role',
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

module.exports  = mongoose.model('mongoose_role_claim', roleClaimSchema);

