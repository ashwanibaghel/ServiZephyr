const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpires: { type: Date }, // expiry of OTP
  isVerified: { type: Boolean, default: false }
}, { timestamps: true }); // auto add createdAt, updatedAt

module.exports = mongoose.model("User", userSchema);
