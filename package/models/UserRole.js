const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'mongooseUsers',
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'mongooseRoles',
      required: true,
    },
  });
  
  module.exports =  mongoose.model('mongooseUserRoles', userRoleSchema);
  
