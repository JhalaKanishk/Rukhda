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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Rukhada
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
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
            <h3 className="text-3xl font-bold text-primary mb-8">
              Our Services
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Landscaping
                </h4>
                <p className="text-brown-text">
                  Designing outdoor environments with artistic vision and
                  precision, using 2D & 3D visuals to align perfectly with your
                  dream.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Garden Execution
                </h4>
                <p className="text-brown-text">
                  Turning blueprints into blooming realities—crafted with
                  detail, care, and respect for nature.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Vertical Gardens
                </h4>
                <p className="text-brown-text">
                  Sustaining the beauty we create through expert care and
                  seasonal upkeep.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Plant Home Delivery
                </h4>
                <p className="text-brown-text">
                  Healthy plants, delivered with care—right to your doorstep,
                  ready to grow.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Vertical Gardens
                </h4>
                <p className="text-brown-text">
                  We promote eco-friendly practices and sustainable living
                  through our plant care approaches and materials.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Garden Styling
                </h4>
                <p className="text-brown-text">
                  Constantly exploring new techniques and designs to create
                  unique, thriving Rukhadas for our clients.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Site Visits & Consultancy
                </h4>
                <p className="text-brown-text">
                  Offering expert advice, ideas, and solutions—tailored to your
                  space and vision.
                </p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  Plant Gifting
                </h4>
                <p className="text-brown-text">
                  Gifting green is gifting life—choose meaningful, eco-friendly
                  presents for every occasion.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16">
            <h3 className="text-3xl text-center font-bold text-primary mb-8">
              Our Values
            </h3>

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
