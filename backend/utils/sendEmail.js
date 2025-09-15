const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ========== OTP Email ==========
async function sendOTPEmail(to, otp) {
  const mailOptions = {
    from: `"ServiZephyr" <${process.env.EMAIL_USER}>`,
    to,
    subject: "ServiZephyr — Email Verification",
    html: `<div style="font-family: Arial, sans-serif; color:#111">
            <h3>Email Verification</h3>
            <p>Your OTP is: <strong style="font-size:18px">${otp}</strong></p>
            <p>This code will expire in 10 minutes.</p>
           </div>`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info);
    return info;
  } catch (err) {
    console.error("❌ Email send error:", err);  // <- IMPORTANT
    throw err; // error ko upar pass karo
  }
  return transporter.sendMail(mailOptions);
}

// ========== Reset Password Email ==========
async function sendResetEmail(to, link) {
  const mailOptions = {
    from: `"ServiZephyr" <${process.env.EMAIL_USER}>`,
    to,
    subject: "ServiZephyr — Password Reset",
    html: `<div style="font-family: Arial, sans-serif; color:#111">
            <h3>Password Reset Request</h3>
            <p>Click below to reset your password:</p>
            <a href="${link}" 
               style="display:inline-block; padding:10px 20px; background:#1E3A8A; color:#fff; text-decoration:none; border-radius:5px;">
               Reset Password
            </a>
            <p>This link will expire in 15 minutes.</p>
           </div>`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info);
    return info;
  } catch (err) {
    console.error("❌ Email send error:", err);  // <- IMPORTANT
    throw err; // error ko upar pass karo
  }
  return transporter.sendMail(mailOptions);
}

module.exports = { sendOTPEmail, sendResetEmail };
