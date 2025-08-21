import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";

export const HeroSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('get-quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Turn your old electronics into{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  instant cash
                </span>{" "}
                – fast, safe, and convenient.
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                We pay the highest value for your electronics—from cell phones and laptops to cameras, 
                tablets, gaming consoles, and more. Whether your devices are brand new, gently used, 
                or even broken, we make the process fast and hassle-free. With cash paid instantly at 
                your doorstep, your unused tech can quickly turn into money in your pocket.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToQuote}
                className="text-lg px-8 py-4 h-auto"
              >
                👉 Get a Free Quote Now
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Learn How It Works
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Buy, Sell, Trade Electronics at Your Doorstep.</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Electronics resale - phones, laptops, tablets, cameras" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};