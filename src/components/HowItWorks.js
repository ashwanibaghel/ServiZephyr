// src/components/HowItWorks.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
    {
        title: "Quick Setup",
        description: "We get your interactive menu and order dashboard live within 48 hours. No technical skills required."
    },
    {
        title: "Share Your Number",
        description: "Promote your dedicated WhatsApp number on social media, in your store, and on packaging."
    },
    {
        title: "Get Direct Orders",
        description: "Customers start ordering directly from you. All orders appear instantly on your live dashboard."
    }
];

export default function HowItWorks() {
    return (
        <section className={styles.section} id="how-it-works">
            <h2 className={styles.heading}>Simple Steps to Go Direct</h2>
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.stepCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDesc}>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
