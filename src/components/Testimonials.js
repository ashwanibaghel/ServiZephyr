'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Rohan Sharma",
        role: "Owner, The Curry House",
        quote: "ServiZephyr has been a game-changer. We have saved over 20% on commissions and our customers love ordering directly on WhatsApp. The loyalty feature is a brilliant touch!"
    },
    {
        name: "Priya Mehta",
        role: "Manager, Brew & Bites Cafe",
        quote: "The order management dashboard is so simple and intuitive. We have reduced our order processing time significantly. Direct payments via UPI have made it seamless for our regulars."
    },
    {
        name: "Vikram Singh",
        role: "Founder, Kitchen Express",
        quote: "As a cloud kitchen, reaching customers directly is crucial. ServiZephyr gave us the tools to do just that without the technical hassle. Our repeat orders have gone up by 40%."
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonials">
            <h2 className={styles.heading}>Loved by Restaurants Across India</h2>
            <div className={styles.testimonialGrid}>
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.quote}>&quot;{t.quote}&quot;</p>
                        <h3 className={styles.name}>{t.name}</h3>
                        <p className={styles.role}>{t.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
