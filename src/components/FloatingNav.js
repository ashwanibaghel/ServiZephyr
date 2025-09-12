// src/components/FloatingNav.js
'use client';
import React from 'react';
import styles from './FloatingNav.module.css';

export default function FloatingNav() {
    return (
        <div className={styles.actionsContainer}>
            <ul className={styles.navLinks}>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
        </div>
    );
}