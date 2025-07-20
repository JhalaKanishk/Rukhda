"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
const categories = [
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Transform your outdoor spaces with professional landscape design",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "terrace-gardening",
    title: "Terrace Gardening",
    description: "Create beautiful rooftop gardens and terrace spaces",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "balcony-beautification",
    title: "Balcony Beautification",
    description: "Maximize small spaces with stunning balcony gardens",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "indoor-plantation",
    title: "Indoor Plantation",
    description:
      "Bring nature indoors with carefully curated plant collections",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "garden-execution",
    title: "Garden Execution",
    description: "Complete garden installation and maintenance services",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
];
export default function GalleryPage() {
  const [activeSection, setActiveSection] = useState("landscaping");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
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
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
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
      <header className="sticky top-0 z-50 bg-[rgba(245,232,208,0.85)] backdrop-blur-md border-b border-border shadow-md transition-all">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">Rukhada</span>
              </div>
            </Link>
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
          <nav className="md:hidden mt-4 flex overflow-x-auto space-x-2 pb-2">
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

      <section className="py-16 px-4 bg-background text-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of landscaping projects, from intimate
            balcony gardens to expansive outdoor landscapes. Each project
            reflects our commitment to bringing natures beauty into every
            space.
          </p>
        </div>
      </section>

      <main className="pb-16">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => {
              sectionRefs.current[category.id] = el;
            }}
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
              <div
                className={`grid gap-6 ${
                  category.images.length === 4
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                      visibleSections.has(category.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${category.title} project ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-card-foreground transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="font-semibold text-lg mb-1">
                          {category.title} Project {index + 1}
                        </h4>
                        <p className="text-sm text-muted-foreground">
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

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl mb-8 text-secondary-foreground">
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
