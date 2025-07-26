import {
  MessageCircle,
  TrendingUp,
  Eye,
  ShieldCheck,
  Wind,
  Smile,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Wind,
      title: "Freedom in Nature",
      description: "We create calm, open, breathable spaces.",
    },
    {
      icon: TrendingUp,
      title: "Prosperity Through Greenery",
      description: "Growth for you, for us, and the planet.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Understanding every client’s vision with depth.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Integrity",
      description: "Building lasting bonds through honesty and action.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "From plan to plant, clarity is our policy.",
    },
    {
      icon: Smile,
      title: "Client Satisfaction",
      description: "Your peace and pride in your garden is our ultimate goal.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Rukhada
            </h2> */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              <span className="block text-primary">About</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Rukhada
              </span>
            </h1>
            <div className="w-44 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-brown-text max-w-6xl mx-auto leading-relaxed">
              RUKHADA is more than a name—it’s a feeling. Founded by Himanshu
              and Gaurav, two souls deeply connected to nature, the brand stands
              for local pride and environmental purpose. Choosing the Rajasthani
              word “RUKHADA” (meaning tree), they honoured both their culture
              and their cause. Launched on 10/05/2025, their shared birthday
              marked the beginning of a green revolution.
            </p>
          </div>

          {/* Story Section */}
          <Card className="shadow-2xl border-0 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
                {/* Content Section - Stacks first on mobile */}
                <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                      Our Story
                    </h3>
                    <p className="text-lg sm:text-2xl font-bold text-primary">
                      The Roots of RUKHADA
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-brown-text leading-relaxed text-sm sm:text-base">
                    <p>
                      We are Himanshu and Gaurav – two individuals from
                      different professional backgrounds but connected by one
                      deep-rooted passion: gardening. Himanshu, an event manager
                      by profession, and Gaurav, a B.Com graduate, both excelled
                      in our respective careers. But what truly brought us
                      together was our shared love for plants.
                    </p>
                    <p>
                      For Himanshu, the love for greenery started early,
                      inspired by his father, who introduced him to gardening.
                      Over the years, tending to plants became more than just a
                      hobby – it became a way of life. Gaurav, a close friend
                      since Class 8, often watched Himanshu deeply immersed in
                      his garden. Eventually, that quiet admiration turned into
                      genuine interest. Encouraged by Himanshu, Gaurav picked up
                      gardening too – and soon, it became his passion as well.
                    </p>
                    <p>
                      For years, it remained a beloved hobby for both of us. We
                      pursued different careers, focused on our professional
                      growth, and gardening stayed a personal retreat. But deep
                      down, we always knew we wanted to build something
                      meaningful – together.
                    </p>
                    <p>
                      We thought: Why not turn this passion into something
                      bigger? Something we could share with the world? That is
                      how RUKHADA was born – a brand rooted in friendship,
                      passion, and the belief that greenery brings peace,
                      beauty, and purpose to life.
                    </p>
                    <p>
                      At RUKHADA, we do not just sell services & plants – we
                      share a piece of our journey, our passion, and our dream
                      of making the world greener, one home at a time.
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="lg:col-span-2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <div className="relative">
                    {/* Background gradient card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl transform rotate-3 shadow-lg"></div>

                    {/* Main image container */}
                    <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                      <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-xl">
                        <Image
                          src="/gallery/owner.JPG"
                          alt="Himanshu and Gaurav - Founders of RUKHADA"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full shadow-md"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-accent/30 rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Section */}
          <div className="mt-16 text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-primary mb-4">
                Our Services
              </h3>
              <div className="flex items-center justify-center mb-8">
                <div className="w-40 h-1 bg-primary rounded-full"></div>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From concept to creation, we bring your garden dreams to life
                with expert care and sustainable practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Landscaping
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing outdoor environments with artistic vision and
                    precision, using 2D & 3D visuals to align perfectly with
                    your dream.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Garden Execution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Turning blueprints into blooming realities—crafted with
                    detail, care, and respect for nature.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Vertical Gardens
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Sustaining the beauty we create through expert care and
                    seasonal upkeep.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Plant Home Delivery
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Healthy plants, delivered with care—right to your doorstep,
                    ready to grow.
                  </p>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Eco-Friendly Practices
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We promote eco-friendly practices and sustainable living
                    through our plant care approaches and materials.
                  </p>
                </div>
              </div>

              {/* Service 6 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Garden Styling
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Constantly exploring new techniques and designs to create
                    unique, thriving gardens for our clients.
                  </p>
                </div>
              </div>

              {/* Service 7 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Site Visits & Consultancy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Offering expert advice, ideas, and solutions—tailored to
                    your space and vision.
                  </p>
                </div>
              </div>

              {/* Service 8 */}
              <div className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 0v1m-2 0V6a2 2 0 00-2 0v1m2 0V4.5a2 2 0 00-2 0v1.5m2 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                    Plant Gifting
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Gifting green is gifting life—choose meaningful,
                    eco-friendly presents for every occasion.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border/50">
              <h4 className="text-2xl font-bold text-primary mb-4">
                Ready to Transform Your Space?
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us discuss your vision and create a personalized plan that
                brings your dream garden to life.
              </p>
              <button className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16">
             <h3 className="text-4xl text-center font-bold text-primary mb-4">
                Our Values
              </h3>
            <div className="flex items-center justify-center mb-8">
              <div className="w-40 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-card border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-brown-text leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
