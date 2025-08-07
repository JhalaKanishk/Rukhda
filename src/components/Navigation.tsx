"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Plans", href: "#plans" },
    { name: "Services", href: "#service" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex heading items-center space-x-2 cursor-pointer">
                {/* <Leaf className="h-8 w-8 text-primary" /> */}
                <Image
                  src="/gallery/logo.png" // Replace with your actual logo path
                  alt="Rukhada Logo"
                  width={200}
                  height={200}
                  className="h-8 w-8 img object-contain border-2 border-primary rounded-full"
                />
                {/* <span className="text-2xl font-bold text-primary">RUKHADA</span>
                <p>ALL THNGS GROW WITH LOVE</p> */}
                <div className="flex flex-col conatineHead items-center">
                  <span className="text-2xl font-bold text-primary">
                    RUKHADA
                  </span>
                  <p className="text-sm tagline text-muted-foreground tracking-wide">
                    ALL THINGS GROW WITH LOVE
                  </p>
                  <span className="landscape text-primary text-[8px]  text-left block">
                    LANDSCAPE
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 menuIcon" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-background border-l border-primary/20 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/10">
            <div className="flex items-center space-x-2">
              {/* <Leaf className="h-6 w-6 text-primary" /> */}
              <Image
                src="/gallery/logo.png" // Replace with your actual logo path
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
                <span className="landscape text-primary text-[8px]  text-left block">
                  LANDSCAPE
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Sidebar Menu */}
          <div className="p-6">
            <nav className="space-y-4 navPhone">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="navbtn block w-full text-left py-3 px-4 rounded-lg text-foreground font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="navbtn block w-full text-left py-3 px-4 rounded-lg text-foreground font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Contact Info in Sidebar */}
            <div className="mt-8 p-4 bg-accent/20 rounded-lg border border-primary/10">
              <h4 className="font-bold text-primary mb-2">Quick Contact</h4>
              <p className="text-sm text-brown-text flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91-8949040522
              </p>
              <p className="text-sm text-brown-text flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91-6375695585
              </p>
              <br />
              <p className="text-sm text-brown-text flex items-center gap-2">
                <Mail className="w-4 h-4" />
                rukhadabyhng10@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
