import { Leaf, MessageCircle, TrendingUp, Eye, ShieldCheck, Wind, Smile } from "lucide-react";

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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Our Story
              </h3>
              <p className="text-brown-text mb-4 leading-relaxed">
                Two different lives, one shared calling. Himanshu and Gaurav
                once walked paths far from nature. But the longing for purpose
                led them back to the roots—literally. Leaving behind routine
                9-to-5 jobs, they chose to grow something meaningful. What
                started as personal healing became a professional journey:
                inspiring people to breathe better, live better, and reconnect
                with green spaces.
              </p>
              <p className="text-brown-text mb-4 leading-relaxed">
                Every plant we place and every design we create is thoughtfully
                chosen to enhance your environment while considering factors
                like lighting, maintenance requirements, and your personal style
                preferences.
              </p>
              <p className="text-brown-text leading-relaxed">
                Today, we are proud to be the leading plant service provider in
                the region, helping thousands of people create their perfect
                green sanctuary.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    5000+
                  </h4>
                  <p className="text-brown-text">Happy Plants Placed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <h3 className="text-3xl text-center font-bold text-primary mb-8">Our Values</h3>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
