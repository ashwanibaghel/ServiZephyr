// src/components/FAQ.js
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "How are we different from Zomato or Swiggy?",
        answer: "ServiZephyr allows restaurants to take direct orders via WhatsApp, reducing commission fees and building direct customer relationships."
    },
    {
        question: "Is it difficult to set up?",
        answer: "Not at all. Our quick setup gets your interactive menu and order dashboard live within 48 hours. No technical skills required."
    },
    {
        question: "What payment methods are supported?",
        answer: "We support UPI, Cards, and Netbanking directly within WhatsApp chat."
    },
    {
        question: "Can I use this for my tiffin or subscription service?",
        answer: "Yes, our subscription/tiffin management feature makes recurring orders simple and hassle-free."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We provide full onboarding, troubleshooting, and dedicated support to ensure smooth operations for your restaurant."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className={styles.faqCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <button
                            className={styles.question}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <motion.p
                                className={styles.answer}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {faq.answer}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
