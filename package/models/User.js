const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: {
      type: String,
      maxlength: 256,
      required: false
    },
    NormalizedUserName: {
      type: String,
      maxlength: 256,
      required: false
    },
    Email: {
      type: String,
      maxlength: 256,
      required: false
    },
    NormalizedEmail: {
      type: String,
      maxlength: 256,
      required: false
    },
    EmailConfirmed: {
      type: Boolean,
      default: false,
      required: true
    },
    PasswordHash: {
      type: String,
      required: false
    },
    SecurityStamp: {
      type: String,
      required: false
    },
    ConcurrencyStamp: {
      type: String,
      required: false
    },
    PhoneNumber: {
      type: String,
      required: false
    },
    PhoneNumberConfirmed: {
      type: Boolean,
      default: false,
      required: true
    },
    TwoFactorEnabled: {
      type: Boolean,
      default: false,
      required: true
    },
    LockoutEnd: {
      type: Date,
      required: false,
      default: null
    },
    LockoutEnabled: {
      type: Boolean,
      default: true,
      required: true
    },
    AccessFailedCount: {
      type: Number,
      default: 0,
      required: true
    },
  });

module.exports = mongoose.model("mongoose_user", userSchema);

