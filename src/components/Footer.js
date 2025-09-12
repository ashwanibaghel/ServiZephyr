'use client';
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.column}>
                    <img src="https://i.ibb.co/VcJxgQBM/logo-servizephyr-removebg-preview.png" alt="Logo" className={styles.logo}/>
                    <p>Empowering restaurants with WhatsApp-first ordering solutions.</p>
                    <p>© 2025 ServiZephyr. All rights reserved.</p>
                </div>
                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#ai-loyalty">AI Loyalty</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact</h4>
                    <p>📧 support@servizephyr.com</p>
                    <p>📍 India</p>
                    <div className={styles.social}>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"/></a>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"/></a>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
