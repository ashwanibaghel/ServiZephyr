"use client";

import { useEffect } from "react";

export default function DashboardPage() {
  // Check auth (agar token nahi hai to redirect to home)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // token delete
    window.location.href = "/"; // ✅ logout hone ke baad homepage par bhejo
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🎉 Welcome to Dashboard</h1>
      <p className="mb-6 text-gray-300">
        Ye demo dashboard hai. Yahan baad me tum apna content / analytics / charts daal sakte ho.
      </p>
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg shadow-md hover:shadow-xl transition font-semibold"
      >
        🚪 Logout
      </button>
    </div>
  );
}
