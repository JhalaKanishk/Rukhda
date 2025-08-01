"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


const categories = [
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Transform your outdoor spaces with professional landscape design",
    images: [
      "/gallery/TB1.JPG",
    ],
  },
  {
    id: "terrace-and-balcony-gardening",
    title: "Terrace and Balcony Gardening",
    description: "Maximize small spaces with stunning balcony gardens",
    images: [
      "/gallery/TB1.JPG",
      "/gallery/TB2.JPG",
      "/gallery/TB3.JPG",
      "/gallery/TB4.JPG",
      "/gallery/TB5.JPG",
      "/gallery/TB6.JPG",
      "/gallery/TB7.JPG",
      "/gallery/TB8.JPG",
      "/gallery/TB9.JPG",
      "/gallery/TB10.JPG",
      "/gallery/TB11.JPG",
    ],
  },
  {
    id: "home-and-office-indoor-plantation",
    title: "Home and Office Indoor Plantation",
    description:
      "Enhance your interiors with lush indoor plants for homes and offices",
    images: [
      "/gallery/HO1.JPG",
      "/gallery/HO2.JPG",
      "/gallery/HO3.JPG",
      "/gallery/HO4.JPG",
      "/gallery/HO5.JPG",
      "/gallery/HO6.JPG",
      "/gallery/HO7.JPG",
      "/gallery/HO8.JPG",
      "/gallery/HO9.JPG",
      "/gallery/HO10.JPG",
      "/gallery/HO11.JPG",
      "/gallery/HO12.JPG",
      "/gallery/HO13.JPG",
      "/gallery/HO14.JPG",
      "/gallery/HO15.JPG",
      "/gallery/HO16.JPG",
      "/gallery/HO17.JPG",
      "/gallery/HO18.JPG",
      "/gallery/HO19.JPG",
      "/gallery/HO20.JPG",
    ],
  },
  {
    id: "vertical-garden",
    title: "Vertical Garden",
    description:
      "Bring nature indoors with carefully curated plant collections",
    images: [
      "/gallery/VG1.JPG",
      "/gallery/VG2.JPG",
      "/gallery/VG3.JPG",
      "/gallery/VG4.JPG",
      "/gallery/VG5.JPG",
      "/gallery/VG6.JPG",
      "/gallery/VG7.JPG",
      "/gallery/VG8.JPG",
      "/gallery/VG9.JPG",
      "/gallery/VG10.JPG",
      "/gallery/VG11.JPG",
      "/gallery/VG12.JPG",
      "/gallery/VG13.JPG",
      "/gallery/VG14.JPG",
      "/gallery/VG15.JPG",
      "/gallery/VG16.JPG",
      "/gallery/VG17.JPG",
      "/gallery/VG18.JPG",
      "/gallery/VG19.JPG",
      "/gallery/VG20.JPG",
      "/gallery/VG21.JPG",
      "/gallery/VG22.JPG",
      "/gallery/VG23.JPG",
      "/gallery/VG24.JPG",
    ],
  },
  // {
  //   id: "garden-styling",
  //   title: "Garden Styling",
  //   description:
  //     "Create beautiful and well-coordinated garden aesthetics with expert styling",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
  // {
  //   id: "garden-execution",
  //   title: "Garden Execution",
  //   description: "Get complete garden setup and execution by professionals",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
  // {
  //   id: "garden-maintenance",
  //   title: "Garden Maintenance",
  //   description: "Keep your garden thriving with regular maintenance and care",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
  // {
  //   id: "visits-and-consultancy",
  //   title: "Visits and Consultancy",
  //   description:
  //     "Get expert advice and on-site visits for all your garden needs",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
  // {
  //   id: "plant-gifting",
  //   title: "Plant Gifting",
  //   description:
  //     "Surprise your loved ones with beautiful and thoughtful plant gifts",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
  // {
  //   id: "plant-home-delivery",
  //   title: "Plant Home Delivery",
  //   description: "Get plants delivered straight to your doorstep with ease",
  //   images: [
  //     "/gallery/l1.JPG",
  //     "/gallery/l2.JPG",
  //     "/gallery/l3.JPG",
  //     "/gallery/l4.JPG",
  //   ],
  // },
];

export default function GalleryPage() {
  const [activeSection, setActiveSection] = useState("landscaping");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => new Set([...prev, sectionId]));
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[rgba(245,232,208,0.85)] backdrop-blur-md border-b border-border shadow-md transition-all">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image
                  src="/gallery/logo.png"
                  alt="Rukhada Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain border-2 border-primary rounded-full"
                />
                <span className="text-2xl font-bold text-primary">RUKHADA</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-accent hover:text-background"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Nav */}
          <nav className="galNav md:hidden mt-4 flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground bg-card hover:bg-accent hover:text-background"
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 px-4 bg-background text-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of landscaping projects, from intimate
            balcony gardens to expansive outdoor landscapes. Each project
            reflects our commitment to bringing natures beauty into every space.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="pb-16">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            // ref={(el) => (sectionRefs.current[category.id] = el)}
            ref={setSectionRef(category.id)}
            className="scroll-mt-24"
          >
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px bg-border flex-1 max-w-xs"></div>
                  <ChevronRight className="h-6 w-6 text-accent mx-4" />
                  <div className="h-px bg-border flex-1 max-w-xs"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* HORIZONTAL SCROLL SLIDER */}
              <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className={`group relative w-80 flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                      visibleSections.has(category.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative w-full h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem]">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${category.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div
                        className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: "#F5E8D0" }}
                      >
                        <h4 className="font-semibold text-lg mb-1">
                          {category.title}
                        </h4>
                        <p
                          className="text-sm text-muted-foreground"
                          style={{ color: "#D9C1A2" }}
                        >
                          Professional {category.title.toLowerCase()} design and
                          execution
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* CTA */}
      <section className="py-16 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center  text-background">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className=" mb-8 galText ">
            Let us create something beautiful together. Contact us for a
            consultation.
          </p>
          <button className="bg-background text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-background transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
