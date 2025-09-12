// src/components/Pricing.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const plans = [
    {
        name: "Basic",
        description: "For new restaurants starting out.",
        features: [
            "Live WhatsApp Menu",
            "Direct Order Dashboard",
            "UPI Payments",
            "Basic Analytics"
        ]
    },
    {
        name: "Pro",
        description: "For established businesses looking to grow.",
        features: [
            "All Basic Features",
            "Credit/Debit Card Payments",
            "Loyalty & Coupon Engine",
            "Advanced Analytics & Reports"
        ]
    }
];

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <h2 className={styles.heading}>Simple, Transparent Pricing</h2>
            <p className={styles.subheading}>Choose the plan that&apos;s right for your business. No hidden fees.</p>
            <div className={styles.planGrid}>
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={styles.planCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <p className={styles.planDescription}>{plan.description}</p>
                        <ul className={styles.featuresList}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <button className={styles.ctaButton}>Contact Us for Pricing</button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
