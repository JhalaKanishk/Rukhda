"use client";
import Carousel3D from "@/components/Carousel3D";
import { useEffect } from "react";
import {
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/rukhada",
      label: "Instagram",
      color: "hover:bg-pink-500 hover:text-white",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/1234567890",
      label: "WhatsApp",
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      icon: Mail,
      href: "mailto:info@rukhada.com",
      label: "Email",
      color: "hover:bg-blue-500 hover:text-white",
    },
    {
      icon: Phone,
      href: "tel:+1234567890",
      label: "Phone",
      color: "hover:bg-primary hover:text-primary-foreground",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 w-fit">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Eco-Friendly Living
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                <span className="block text-primary">Our</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Vision
                </span>
              </h1>

              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                A campaign rooted in responsibility— We envision a world where
                every individual contributes to a{" "}
                <span className="text-primary font-semibold">
                  greener tomorrow
                </span>
                . Inspired by the urgency of global warming, we promote tree
                plantation and green living to ensure a cleaner, healthier earth
                for the generations that follow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-primary text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="text-background">Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button className="group bg-card/80 backdrop-blur-sm text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Plants Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Gardens Created
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Image Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <Carousel3D />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Social Media Quick Links */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-3">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 transition-colors" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.label}
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Social Links */}
        {/* <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-muted-foreground">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
