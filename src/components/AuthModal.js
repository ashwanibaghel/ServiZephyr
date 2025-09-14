// src/components/AuthModal.js
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AuthModal.module.css";

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState("login"); // login | signup | forgot | otp
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState(""); // success | error | info

  const API = process.env.NEXT_PUBLIC_API_URL;

  // 🔒 Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 🔄 Reset
  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setOtp("");
    setMsg("");
    setMsgType("");
  };

  const closeModal = () => {
    resetForm();
    setStep("login");
    onClose();
  };

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");
    setMsgType("info");
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✅ Login successful!");
        setMsgType("success");
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          closeModal();
          window.location.href = "/dashboard";
        }, 1200);
      } else {
        setMsg(data.message || "Login failed");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("❌ Server error: " + err.message);
      setMsgType("error");
    }
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMsg("⚠️ Passwords do not match");
      setMsgType("error");
      return;
    }
    setMsg("Creating account...");
    setMsgType("info");

    try {
      const res = await fetch(`${API}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("📩 OTP sent to your email");
        setMsgType("success");
        setStep("otp");
      } else {
        setMsg(data.message || "Signup failed");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("❌ Server error: " + err.message);
      setMsgType("error");
    }
  };

  // ---------------- VERIFY OTP ----------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMsg("Verifying OTP...");
    setMsgType("info");

    try {
      const res = await fetch(`${API}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("🎉 Account verified! You can login now.");
        setMsgType("success");
        setTimeout(() => setStep("login"), 1500);
      } else {
        setMsg(data.message || "Invalid OTP");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("❌ Server error: " + err.message);
      setMsgType("error");
    }
  };

  // ---------------- FORGOT PASSWORD ----------------
  const handleForgot = async (e) => {
    e.preventDefault();
    setMsg("Sending reset link...");
    setMsgType("info");

    try {
      const res = await fetch(`${API}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("📩 Reset link sent!");
        setMsgType("success");
      } else {
        setMsg(data.message || "Request failed");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("❌ Server error: " + err.message);
      setMsgType("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Card */}
          <motion.div
            className={styles.card}
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close Btn */}
            <button onClick={closeModal} className={styles.closeBtn}>✕</button>

            {/* Title */}
            <h2 className={styles.heading}>ServiZephyr</h2>

            {/* Toggle buttons */}
            <div className={styles.toggleWrapper}>
              <button
                onClick={() => setStep("login")}
                className={`${styles.toggleBtn} ${step === "login" ? styles.toggleActive : ""}`}
              >
                Login
              </button>
              <button
                onClick={() => setStep("signup")}
                className={`${styles.toggleBtn} ${step === "signup" ? styles.toggleActive : ""}`}
              >
                Sign Up
              </button>
            </div>

            {/* LOGIN */}
            {step === "login" && (
              <form onSubmit={handleLogin} className={styles.form}>
                <input className={styles.input} placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input className={styles.input} placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <p className={styles.forgot} onClick={()=>setStep("forgot")}>Forgot Password?</p>
                <button type="submit" className={styles.btn}>Login</button>
                <p className={styles.switchText}>
                  Not a member?{" "}
                  <span onClick={()=>setStep("signup")} className={styles.link}>Sign up now</span>
                </p>
              </form>
            )}

            {/* SIGNUP */}
            {step === "signup" && (
              <form onSubmit={handleSignup} className={styles.form}>
                <input className={styles.input} placeholder="Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
                <input className={styles.input} placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input className={styles.input} placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <input className={styles.input} placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
                <button type="submit" className={styles.btn}>Create Account</button>
              </form>
            )}

            {/* OTP */}
            {step === "otp" && (
              <form onSubmit={handleVerifyOtp} className={styles.form}>
                <input className={styles.input} placeholder="Enter OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} required />
                <button type="submit" className={styles.btn}>Verify OTP</button>
              </form>
            )}

            {/* FORGOT */}
            {step === "forgot" && (
              <form onSubmit={handleForgot} className={styles.form}>
                <input className={styles.input} placeholder="Enter your email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <button type="submit" className={styles.btn}>Send Reset Link</button>
                <p className={styles.switchText} onClick={()=>setStep("login")}>Back to Login</p>
              </form>
            )}

            {/* Messages */}
            {msg && (
              <motion.p
                className={`${styles.msg} ${
                  msgType === "success" ? styles.msgSuccess :
                  msgType === "error" ? styles.msgError :
                  styles.msgInfo
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {msg}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
