// models/menuItem.js
const mongoose = require('mongoose');

// Database mein kaisa data save hoga, uska structure (Schema)
const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    available: { type: Boolean, default: true }
});

// Is schema ko export kar rahe hain taaki dusri files use kar sakein
module.exports = mongoose.model('MenuItem', menuItemSchema);