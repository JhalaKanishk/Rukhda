"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      toast.success("Message Sent!", {
        description:
          "Thank you for contacting us. We will get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact us directly.",
      });
    }
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Visit Our Nursery",
    //   details: ["123 Green Valley Road", "Plant District, GC 12345"],
    //   link: "https://maps.google.com",
    // },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-8949040522", "+91-6375695585"],
      link: "tel:+91-8949040522",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["rukhadalandscap@gmail.com"],
      link: "mailto:rukhadalandscap@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM - 6PM", "Sat-Sun: 9AM - 5PM"],
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-brown-text max-w-3xl mx-auto leading-relaxed">
              Ready to start your green journey? We’re just a message away.
              Whether it’s consultation, collaboration, or curiosity— Let’s
              plant something together that lasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-brown-text">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoFocus
                      className="mt-1 border border-primary/20 bg-white/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-brown-text">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border border-primary/20 bg-white/50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-brown-text">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border border-primary/20 bg-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-brown-text">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-1 border border-primary/20 bg-white/50 resize-none"
                    placeholder="Tell us about your space and what you have in mind..."
                  />
                </div>

                <Button type="submit" className="w-full group text-amber-50">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <p className="text-brown-text mb-8 leading-relaxed">
                  We are here to help you create the perfect Environment. Reach
                  out through any of these channels and our friendly team will
                  get back to you promptly.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-accent/20 rounded-xl border border-primary/10 hover:bg-accent/30 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          {item.title}
                        </h4>
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-brown-text">
                            {item.link && detailIndex === 0 ? (
                              <a
                                href={item.link}
                                className="hover:text-primary transition-colors"
                                target={
                                  item.link.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.link.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold text-primary mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-brown-text text-sm leading-relaxed">
                  We typically respond to all inquiries within 2–4 hours during
                  business hours. For urgent plant care emergencies, call our
                  dedicated support line.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold text-primary mb-2">
                  Visit Us
                </h4>
                {/* <p className="text-brown-text text-sm leading-relaxed mb-4">
                  We welcome walk-ins and scheduled visits! Tap below to
                  navigate to our nursery.
                </p> */}
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                    title="Rukhda Nursery Location"
                    src="https://www.google.com/maps?q=24.56769371032715,73.73841857910156&z=17&hl=en&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactSection;
