// routes/menu.js
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem'); // Humara model import kiya

// GET Request: Saare menu items fetch karne ke liye
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find(); // Database se sab fetch karo
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// POST Request: Naya menu item banane ke liye
router.post('/', async (req, res) => {
    // Frontend se jo data aaya hai (name, price), usse ek naya item banaya
    const newItem = new MenuItem({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });
    try {
        const savedItem = await newItem.save(); // Database mein save karo
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: "Error adding item" });
    }
});

// DELETE Request: Menu item delete karne ke liye
router.delete('/:id', async (req, res) => {
    try {
        // Frontend se jo ID aayi hai, us item ko dhoondh kar delete karo
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item Deleted' });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;