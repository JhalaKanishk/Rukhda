"use client";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import Link from "next/link";

export default function ConnectPage() {
  type SocialIconProps = {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    url: string;
    hoverColor: string;
  };

  const SocialIcon = ({
    name,
    icon: Icon,
    url,
    hoverColor,
  }: SocialIconProps) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-20 h-20 md:w-24 md:h-24 
        bg-foreground text-background 
        rounded-full 
        flex items-center justify-center 
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-2xl
        ${hoverColor} hover:text-white
        focus:outline-none focus:ring-4 focus:ring-foreground focus:ring-opacity-50
      `}
      aria-label={`Connect on ${name}`}
    >
      <Icon size={32} className="md:w-10 md:h-10" />
    </a>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Logo */}
      <div className="w-full flex justify-center items-center py-4">
        <Link href="/">
          <div className="flex heading items-center space-x-2 cursor-pointer">
            <Image
              src="/gallery/logo.png"
              alt="Rukhada Logo"
              width={200}
              height={200}
              className="h-8 w-8 img object-contain border-2 border-primary rounded-full"
            />
            <div className="flex flex-col conatineHead items-center">
              <span className="text-2xl font-bold text-primary">RUKHADA</span>
              <p className="text-sm tagline text-muted-foreground tracking-wide">
                ALL THINGS GROW WITH LOVE
              </p>
              <span className="landscape text-primary text-[8px] text-left block">
                LANDSCAPE
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="text-2xl w-full flex justify-center items-center py-4 font-semibold text-primary hover:text-accent transition-colors cursor-pointer">
        Quick Links 🔗
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="grid grid-cols-2 grid-rows-3 gap-6 place-items-center">
          {/* Row 1 */}
          <SocialIcon
            name="Instagram"
            icon={Instagram}
            url="https://www.instagram.com/rukhada_landscape/?igsh=MXFlamQ2ZnpmMW1vaA%3D%3D#"
            hoverColor="hover:bg-pink-500"
          />
          <SocialIcon
            name="Facebook"
            icon={Facebook}
            url="https://www.facebook.com/share/19VpsfZxVs/?mibextid=wwXIfr"
            hoverColor="hover:bg-blue-600"
          />

          {/* Row 2 */}
          <SocialIcon
            name="Website"
            icon={Globe}
            url="https://www.rukhada.in/"
            hoverColor="hover:bg-blue-500"
          />
          <SocialIcon
            name="WhatsApp"
            icon={MessageCircle}
            url="https://wa.me/8949040522"
            hoverColor="hover:bg-green-500"
          />

          {/* Row 3 */}
          <SocialIcon
            name="Call"
            icon={Phone}
            url="tel:+918949040522"
            hoverColor="hover:bg-yellow-500"
          />
          <SocialIcon
            name="Email"
            icon={Mail}
            url="mailto:rukhadalandscape@gmail.com"
            hoverColor="hover:bg-red-500"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-background via-primary/5 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Transforming spaces with nature's beauty. We specialize in plant
                care, interior plant décor, and creating peaceful green
                environments for homes, offices, and special events.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    text: "8949040522, 6375695585",
                    href: "tel:+918949040522",
                  },
                  {
                    icon: Mail,
                    text: "rukhadalandscape@gmail.com",
                    href: "mailto:rukhadalandscape@gmail.com",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 bg-primary/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-muted-foreground text-center lg:text-left">
                <div className="font-medium">
                  © 2025 Rukhada. All rights reserved.
                </div>
                <div className="text-sm mt-1">
                  Bringing nature to life, one space at a time.
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Plant Care Guide"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 decoration-primary/50"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}