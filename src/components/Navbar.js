// src/components/Navbar.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuthModal from "./AuthModal";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className={styles.navbar}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoOval}></div>
            <Image
              src="https://i.ibb.co/XmbFfyV/logo-servizephyr-removebg-preview.png"
              alt="ServiZephyr Logo"
              width={300}
              height={100}
              className={styles.logo}
              priority
            />
          </div>

          <div className={styles.navRight}>
            <ul className={styles.navLinks}>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>

            {/* Get Started button opens modal */}
            <button
              className={styles.ctaButton}
              onClick={() => setIsOpen(true)}
            >
              Get Started
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
