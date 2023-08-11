const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'mongoose_user',
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'mongoose_role',
      required: true,
    },
  });
  
  module.exports =  mongoose.model('mongoose_user_role', userRoleSchema);
  
