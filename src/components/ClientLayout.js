"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";

export default function ClientLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {children}
    </>
  );
}
