// src/components/Footer.js
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="https://i.ibb.co/XmbFfyV/logo-servizephyr-removebg-preview.png"
            alt="ServiZephyr Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} ServiZephyr. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
