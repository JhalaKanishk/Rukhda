'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";


const Footer = () => {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast.success("Subscribed!", {
                description: "Thank you for subscribing to our newsletter. You'll receive plant care tips and updates.",
            });
            setEmail("");
        }
    };

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Service Plans", href: "#plans" },
        { name: "Gallery", href: "#gallery" },
        { name: "Customer Reviews", href: "#reviews" },
        { name: "Contact", href: "#contact" }
    ];

    const services = [
        "Indoor Plant Care",
        "Balcony Gardens",
        "Office Rukhdas",
        "Event Decoration",
        "Plant Consultation",
        "Emergency Care"
    ];

    const socialLinks = [
        {
            icon: Instagram,
            name: "Instagram",
            href: "https://instagram.com/Rukhda",
            color: "hover:text-pink-500"
        },
        {
            icon: Facebook,
            name: "Facebook",
            href: "https://facebook.com/Rukhda",
            color: "hover:text-blue-500"
        },
        {
            icon: MessageCircle,
            name: "Pinterest",
            href: "https://pinterest.com/Rukhda",
            color: "hover:text-red-500"
        }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-primary/10">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-bold text-primary">Rukhda</span>
                        </div>
                        <p className="text-brown-text leading-relaxed">
                            Transforming spaces with nature's beauty. We specialize in plant care, interior plant décor,
                            and creating peaceful green environments for homes, offices, and special events.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-brown-text">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+1 (555) 123-PLANT</span>
                            </div>
                            <div className="flex items-center space-x-3 text-brown-text">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>info@Rukhda.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-brown-text">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>123 Green Valley Road, Plant District</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-primary/10 rounded-full text-primary transition-all duration-300 hover:bg-primary hover:text-white ${social.color}`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Quick Links</h3>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block text-brown-text hover:text-primary transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-brown-text hover:text-primary transition-colors cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Stay Connected</h3>
                        <p className="text-brown-text mb-6 leading-relaxed">
                            Subscribe to our newsletter for plant care tips, seasonal advice, and special offers.
                        </p>


                        {/* Trust Badges */}
                        <div className="mt-6 space-y-2 text-sm text-brown-light">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Eco-Certified Practices</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>24/7 Plant Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-primary/10 bg-primary/5">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-brown-text text-sm">
                            © 2024 Rukhda. All rights reserved. | Bringing nature to life, one space at a time.
                        </div>
                        <div className="flex space-x-6 text-sm text-brown-light">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-primary transition-colors">Plant Care Guide</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;