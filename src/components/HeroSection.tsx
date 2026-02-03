import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="relative container mx-auto px-4 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Sell iPhones, Laptops, Tablets, Gaming Consoles & Cameras in{" "}
                <span className="text-green-600">
                  Toronto GTA
                </span>{" "}
                for Instant Cash – Fast, Safe & Hassle-Free.
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Looking to <strong>sell used electronics in Toronto</strong>? 
                We offer doorstep pickup across GTA for{" "}
                <strong>phones, laptops, tablets, gaming consoles & cameras</strong>. Get{" "}
                <strong>instant cash for electronics Toronto</strong> with secure data wiping,
                eco-friendly recycling, and no hidden fees. Sell phones, trade tablets,
                or get top cash value for your old gadgets today!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="text-lg px-10 py-5 h-auto shadow-lg hover:shadow-xl transition"
              >
                <a
                  href="https://forms.gle/K3zg26oDVxsaXiNK9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote Now
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-5 h-auto"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn How It Works
              </Button>
            </div>

            {/* Trust */}
            <div className="pt-6 border-t border-border/40 space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Electronics Pickup GTA – Safe, Secure & Best Prices Guaranteed
              </h2>
              <p className="text-muted-foreground">
                Serving Toronto & GTA – doorstep pickup, instant cash for your electronics,
                and hassle-free service.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Sell iPhones, laptops, tablets, cameras in Toronto GTA for instant cash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
