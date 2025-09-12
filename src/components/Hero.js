'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={styles.headline}
            >
                Your Restaurant, Your Customers. <br /> Directly on WhatsApp.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={styles.subheadline}
            >
                Launch your own powerful ordering bot with ServiZephyr and build a direct relationship with your customers, saving on high commissions.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <button className={styles.ctaButton}>Request a Free Demo</button>
            </motion.div>
        </div>
    );
}
