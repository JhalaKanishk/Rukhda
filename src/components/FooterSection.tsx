"use client";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import type React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Service Plans", href: "#plans" },
    { name: "Gallery", href: "#gallery" },
    { name: "Customer Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Landscaping",
    "Terrace And Balcony Gardening",
    "Vertical Garden",
    "Home And Office Indoor Plantation",
    "Garden Styling",
    "Garden Execution",
    "Garden Maintenance",
    "Visits And Consultancy",
    "Plant Gifting",
    "Plant Home Delivery",
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/rukhada_by_hng?igsh=Y3R4c3pxMWhpdTU5",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      followers: "12.5K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://www.facebook.com/share/19VpsfZxVs/?mibextid=wwXIfr",
      color: "hover:bg-blue-600",
      followers: "8.2K",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      href: "https://wa.me/8949040522",
      color: "hover:bg-green-500",
      followers: "24/7",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-primary/5 to-primary/10 border-t border-primary/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <Image
                  src="/gallery/logo.png" // Replace with your actual logo path
                  alt="Rukhada Logo"
                  width={200}
                  height={200}
                  className="h-8 w-8 img object-contain border-2 border-primary rounded-full"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col conatineHead items-center">
                <span className="text-2xl font-bold text-primary">RUKHADA</span>
                <p className="text-sm tagline text-muted-foreground tracking-wide">
                  ALL THINGS GROW WITH LOVE
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Transforming spaces with natures beauty. We specialize in plant
              care, interior plant décor, and creating peaceful green
              environments for homes, offices, and special events.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "8949040522, 6375695585",
                  href: "tel:+8949040522",
                },
                {
                  icon: Mail,
                  text: "rukhadabyhng10@gmail.com",
                  href: "mailto:rukhadabyhng10@gmail.com",
                },
                // {
                //   icon: MapPin,
                //   text: "123 Green Valley Road, Plant District",
                //   href: "#",
                // },
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

            {/* Enhanced Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div key={social.name} className="group relative">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex items-center justify-center w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl text-primary transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg hover:shadow-primary/25 ${social.color} overflow-hidden`}
                      >
                        <Icon className="h-5 w-5 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </a>

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                        <div className="text-primary font-semibold">
                          {social.name}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {social.followers}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer w-full text-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="group flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-primary/50 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Footer */}
      <div className="border-t border-primary/20 bg-primary/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-muted-foreground text-center lg:text-left">
              <div className="font-medium">
                © 2024 Rukhada. All rights reserved.
              </div>
              <div className="text-sm mt-1">
                Bringing nature to life, one space at a time.
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Developed with 💚 by
              </div>
              <div className="font-semibold text-primary hover:text-accent transition-colors cursor-pointer">
                Kanishk.Raj.Singh.Jhala
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
  );
};

export default Footer;
