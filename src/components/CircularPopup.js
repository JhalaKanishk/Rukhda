"use client";
import { useState } from "react";
import { Phone, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CircularPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Buttons */}
      <div
        className={`flex flex-col items-center space-y-4 mb-4 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } origin-bottom`}
      >
        <Link href="tel:+1234567890">
          <button className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700">
            <Phone />
          </button>
        </Link>

        <Link href="https://wa.me/1234567890" target="_blank">
          <button className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600">
            <MessageCircle />
          </button>
        </Link>

        <Link href="https://instagram.com/yourhandle" target="_blank">
          <button className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:bg-pink-600">
            <Instagram />
          </button>
        </Link>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-primary text-white text-xl font-bold shadow-2xl flex items-center justify-center hover: transition-transform duration-300 cursor-pointer"
      >
        <img
            src={open ? "/gallery/logo.png" : "/gallery/logo.png"}
            alt="Toggle Icon"
            className="w-15 h-15"
        />
      </button>
    </div>
  );
}
