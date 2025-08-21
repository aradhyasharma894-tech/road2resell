import { Check, Clock, Shield, Truck, Leaf } from "lucide-react";

export const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Convenience",
      description: "No need to travel, we come to you at your preferred time and location."
    },
    {
      icon: Clock,
      title: "Instant Payment",
      description: "Get paid in cash on the spot after inspection. No waiting for checks or transfers."
    },
    {
      icon: Shield,
      title: "Trustworthy",
      description: "Safe, transparent deals with no hidden fees. We will securely wipe your device after purchase."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "We give electronics a second life and help reduce e-waste for a greener planet."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose <span className="text-secondary">Road2Resell</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best experience for selling your electronics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <Check className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};