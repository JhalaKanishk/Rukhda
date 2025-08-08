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

  const services = [
    {
      title: "Landscaping",
      description:
        "We design and develop beautiful outdoor spaces that reflect your personality and suit your lifestyle. Whether it’s a home garden, farmhouse, resort, or commercial property—we plan, design, and create landscapes that are green, aesthetic, and functional.",
    },
    {
      title: "Terrace & Balcony Gardening",
      description:
        "Turn your empty terrace or balcony into a relaxing green retreat! We help you design cozy green corners with planters, artificial grass, seating areas, herbs, and flowers—perfect for city homes with limited space.",
    },
    {
      title: "Vertical Garden",
      description:
        "Short on space? Go vertical! We create lush green walls that beautify your interiors or exteriors. Great for balconies, living rooms, offices, and entryways—our vertical gardens are space-saving, freshen the air, and look amazing.",
    },
    {
      title: "Home & Office Indoor Plantation",
      description:
        "We bring greenery indoors! From aesthetic pots to air-purifying plants, we style and set up indoor plants that fit your decor and mood. Perfect for homes, offices, cafes, salons, and clinics—boost your health and your interiors.",
    },
    {
      title: "Garden Styling",
      description:
        "Already have a garden but need a fresh look? We restyle your existing garden with thoughtful placement of plants, pots, lighting, décor items, and seating to give it a beautiful and balanced new look.",
    },
    {
      title: "Garden Execution",
      description:
        "From design to final set-up, we take care of the full garden project. Our team will handle plantation, hardscape, irrigation systems, lighting, and accessories—everything needed to make your dream garden come alive.",
    },
    {
      title: "Garden Maintenance",
      description:
        "We provide regular maintenance services for your garden to keep it healthy and beautiful—includes pruning, watering, fertilizing, cleaning, pest control, and seasonal care. Weekly, monthly, or yearly packages available.",
    },
    {
      title: "Visits & Consultancy",
      description:
        "Need expert advice? We offer site visits and consultations to guide you on plant selection, layout planning, garden health, and styling ideas. Ideal for beginners or those planning to develop their green space.",
    },
    {
      title: "Plant Gifting",
      description:
        "Gift something green! We offer curated plant gift options for birthdays, festivals, corporate events, housewarmings, and special occasions. Choose from beautiful pots, planters, and combos—eco-friendly and thoughtful.",
    },
    {
      title: "Plant Home Delivery",
      description:
        "Order your favorite plants from the comfort of your home! We offer doorstep delivery of indoor, outdoor, flowering, herbal, and decorative plants—packed with care and delivered fresh to your home.",
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
          <div className="mt-16 text-center" id="service">
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

            {/* Service Section  */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                      {service.title}
                    </h4>
                    {/* Content Section */}
                    <p className="text-[#b79360] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
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
