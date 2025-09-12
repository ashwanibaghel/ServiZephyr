'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const featureList = [
    { title: "Live Interactive Menu", description: "Customers browse a beautiful, interactive menu directly on WhatsApp." },
    { title: "Direct Order Management", description: "Receive and manage all orders on a simple, live dashboard." },
    { title: "Integrated Online Payments", description: "Supports UPI, Cards, and Netbanking right within the WhatsApp chat." },
    { title: "Automated Bill Generation", description: "Instantly generates a professional, printable bill for every order." },
    { title: "Loyalty Program & Coupons", description: "Retain customers with a points-based loyalty system and custom discounts." },
    { title: "Automated Feedback System", description: "Automatically collects customer ratings and feedback after every order." }
];

export default function Features() {
    return (
        <section className={styles.featuresSection} id="features">
            <h2 className={styles.heading}>Everything You Need, All in One Place</h2>
            <div className={styles.featuresGrid}>
                {featureList.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={styles.featureCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
