import { Leaf, Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
    const features = [
        {
            icon: Leaf,
            title: "Expert Plant Care",
            description: "Our certified plant specialists ensure your green friends thrive in any environment."
        },
        {
            icon: Heart,
            title: "Passionate Team",
            description: "We genuinely care about bringing nature into your daily life and creating peaceful spaces."
        },
        {
            icon: Award,
            title: "Quality Service",
            description: "Award-winning design and maintenance services trusted by hundreds of satisfied clients."
        },
        {
            icon: Users,
            title: "Community Focus",
            description: "Building a community of plant lovers while promoting sustainable living practices."
        }
    ];

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            About Rukhda
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                        <p className="text-lg text-brown-text max-w-3xl mx-auto leading-relaxed">
                            Founded with a mission to bring the tranquility and beauty of nature into every space,
                            Rukhda has been transforming homes, offices, and events with carefully curated plant solutions.
                            Our passion lies in creating environments where people can flourish alongside nature.
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
                            <p className="text-brown-text mb-4 leading-relaxed">
                                What started as a small initiative to brighten up workspaces has grown into a comprehensive
                                plant care and décor service. We believe that surrounding yourself with greenery isn't just
                                about aesthetics—it's about creating a lifestyle that promotes well-being, productivity, and connection with nature.
                            </p>
                            <p className="text-brown-text mb-4 leading-relaxed">
                                Every plant we place and every design we create is thoughtfully chosen to enhance your environment
                                while considering factors like lighting, maintenance requirements, and your personal style preferences.
                            </p>
                            <p className="text-brown-text leading-relaxed">
                                Today, we're proud to be the leading plant service provider in the region, helping thousands
                                of people create their perfect green sanctuary.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                                <div className="text-center">
                                    <Leaf className="h-20 w-20 text-primary mx-auto mb-4" />
                                    <h4 className="text-2xl font-bold text-primary mb-2">5000+</h4>
                                    <p className="text-brown-text">Happy Plants Placed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                    <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                                    <p className="text-brown-text leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Values Section */}
                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-8">Our Values</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-3">Sustainability</h4>
                                <p className="text-brown-text">
                                    We promote eco-friendly practices and sustainable living through our plant care approaches and materials.
                                </p>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-3">Innovation</h4>
                                <p className="text-brown-text">
                                    Constantly exploring new techniques and designs to create unique, thriving Rukhdas for our clients.
                                </p>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-primary mb-3">Excellence</h4>
                                <p className="text-brown-text">
                                    Delivering exceptional service and maintaining the highest standards in every project we undertake.
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