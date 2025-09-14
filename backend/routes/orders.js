// restaurant-backend/routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET Request: Saare orders fetch karne ke liye (Pehle se hai)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// #### YEH NAYA CODE ADD HUA HAI ####
// POST Request: Naya order banane ke liye (Bot iska use karega)
router.post('/', async (req, res) => {
    // Bot se jo data aayega (items, totalAmount, etc.)
    const { items, totalAmount, customerDetails } = req.body;

    // Basic validation
    if (!items || !totalAmount || !customerDetails) {
        return res.status(400).json({ message: "Missing required order data" });
    }

    const newOrder = new Order({
        items,
        totalAmount,
        customerDetails
    });

    try {
        const savedOrder = await newOrder.save(); // Naye order ko database mein save karo
        res.status(201).json(savedOrder); // Success ka response bhejo
    } catch (err) {
        res.status(500).json({ message: "Failed to create order" });
    }
});
// #### YAHAN TAK NAYA CODE HAI ####


// PATCH Request: Order ka status update karne ke liye (Pehle se hai)
router.patch('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = req.body.status;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;