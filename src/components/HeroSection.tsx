import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light"
    >
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Sell iPhones, Laptops, Tablets & Cameras in{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Toronto GTA
                </span>{" "}
                for Instant Cash – Fast, Safe & Hassle-Free.
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Looking to <strong>sell used electronics in Toronto</strong>? 
                We offer doorstep pickup across GTA for <strong>phones, laptops, tablets, cameras</strong>  Get{" "}
                <strong>instant cash for electronics Toronto</strong> with secure data wiping, eco-friendly recycling, and no hidden fees. 
                Sell phones, trade tablets, or get top cash value for your old gadgets today!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <a
                  href="https://forms.gle/K3zg26oDVxsaXiNK9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💰 Get a Free Quote Now
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn How It Works
              </Button>
            </div>

            {/* Trust & Subheading */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Electronics Pickup GTA – Safe, Secure & Best Prices Guaranteed
              </h2>
              <p className="text-muted-foreground">
                Serving Toronto & GTA – doorstep pickup, instant cash for your electronics, and hassle-free service.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Sell iPhones, laptops, tablets, cameras in Toronto GTA for instant cash"
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
