import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PlansSection = () => {
    const plans = [
        {
            name: "Starter Green",
            price: 29,
            period: "month",
            description: "Perfect for small spaces and beginners",
            features: [
                "3 carefully selected plants",
                "Monthly care visits",
                "Basic plant care guide",
                "WhatsApp support",
                "Plant replacement guarantee"
            ],
            popular: false
        },
        {
            name: "Urban Oasis",
            price: 59,
            period: "month",
            description: "Ideal for apartments and medium spaces",
            features: [
                "6-8 diverse plant selection",
                "Bi-weekly care visits",
                "Seasonal plant rotation",
                "24/7 plant care support",
                "Custom plant arrangements",
                "Free plant replacement",
                "Watering schedule app"
            ],
            popular: true
        },
        {
            name: "Green Sanctuary",
            price: 99,
            period: "month",
            description: "Complete plant paradise for large spaces",
            features: [
                "12+ premium plant collection",
                "Weekly maintenance visits",
                "Custom design consultation",
                "Priority support & advice",
                "Seasonal decoration refresh",
                "Plant health monitoring",
                "Exclusive plant varieties",
                "Interior design integration"
            ],
            popular: false
        }
    ];

    return (
        <section id="plans" className="py-20 bg-gradient-to-b from-accent/10 to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            Choose Your Green Journey
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                        <p className="text-lg text-brown-text max-w-3xl mx-auto leading-relaxed">
                            Select the perfect plan that fits your space and lifestyle. All plans include our expert care,
                            quality guarantee, and ongoing support to ensure your plants thrive.
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular
                                        ? 'border-primary bg-gradient-to-b from-primary/5 to-white scale-105'
                                        : 'border-border bg-card hover:border-primary/30'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center">
                                            <Star className="h-4 w-4 mr-1" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                                    <p className="text-brown-text mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-4xl font-bold text-primary">${plan.price}</span>
                                        <span className="text-brown-light ml-2">/{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-brown-text">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? "hero" : "nature"}
                                    className="w-full"
                                    size="lg"
                                >
                                    {plan.popular ? "Start Growing Today" : "Choose Plan"}
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* Additional Services */}
                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-8">Additional Services</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "One-time Setup", price: "Starting at $150" },
                                { name: "Event Decoration", price: "Starting at $200" },
                                { name: "Plant Consultation", price: "$75/hour" },
                                { name: "Emergency Care", price: "$50/visit" }
                            ].map((service, index) => (
                                <div key={index} className="p-6 bg-card rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-lg font-bold text-primary mb-2">{service.name}</h4>
                                    <p className="text-brown-text">{service.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlansSection;