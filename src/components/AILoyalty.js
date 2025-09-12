// src/components/AILoyalty.js
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AILoyalty.module.css';

export default function AILoyalty() {
    const [formData, setFormData] = useState({
        restaurantType: '',
        avgOrder: '',
        retentionRate: '',
        profitMargin: '',
        loyaltyGoals: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("AI Suggestions Generated! (Mockup)");
    };

    return (
        <section className={styles.section} id="ai-loyalty">
            <h2 className={styles.heading}>Optimize Your Loyalty Program with AI</h2>
            <p className={styles.subheading}>Fill in your restaurant&apos;s details and let our AI provide you with tailored discount and loyalty strategies.</p>
            <motion.form
                className={styles.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <input type="text" name="restaurantType" placeholder="Restaurant Type (e.g., Italian, Cafe)" value={formData.restaurantType} onChange={handleChange} required />
                <input type="number" name="avgOrder" placeholder="Avg. Order (₹)" value={formData.avgOrder} onChange={handleChange} required />
                <input type="number" name="retentionRate" placeholder="Retention Rate (%)" value={formData.retentionRate} onChange={handleChange} required />
                <input type="number" name="profitMargin" placeholder="Profit Margin (%)" value={formData.profitMargin} onChange={handleChange} required />
                <input type="text" name="loyaltyGoals" placeholder="Loyalty Program Goals" value={formData.loyaltyGoals} onChange={handleChange} required />
                <button type="submit" className={styles.submitBtn}>Get AI Suggestions</button>
            </motion.form>
        </section>
    );
}
