"use client";
import { useState } from "react";
import { Phone, Instagram, MessageCircle, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CircularPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Buttons */}
      <div
        className={`flex flex-col items-center space-y-3 mb-4 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } origin-bottom`}
      >
        {/* Phone */}
        <Link href="tel:+1234567890">
          <div className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Phone className="w-5 h-5 text-green-600" />
          </div>
        </Link>

        {/* WhatsApp */}
        <Link href="https://wa.me/8949040522" target="_blank">
          <div className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-5 h-5 text-emerald-500" />
          </div>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/rukhada_by_hng?igsh=Y3R4c3pxMWhpdTU5"
          target="_blank"
        >
          <div className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Instagram className="w-5 h-5 text-pink-500" />
          </div>
        </Link>

         {/* Facebook */}
        <Link
          href="https://www.facebook.com/share/19VpsfZxVs/?mibextid=wwXIfr"
          target="_blank"
        >
          <div className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Facebook className="w-5 h-5 text-blue-500" />
          </div>
        </Link>
      </div>

      {/* Main Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-card/80 backdrop-blur-md border border-[#2d3015]/70 border-[2px] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {/* <Image src="/gallery/logo.png" alt="Toggle Icon" className="w-14 h-14" /> */}
        <Image
  src="/gallery/logo.png"
  alt="Toggle Icon"
  width={56} // 14 * 4 = 56px
  height={56}
  className="w-14 h-14"
/>
      </button>
    </div>
  );
}
