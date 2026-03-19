import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-electronics.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative container mx-auto px-4 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Sell Electronics For{" "}
                <span className="text-green-600">Top Cash</span> , No Store Visit-{" "}
                <span className="text-green-600">We Come To You</span>{" "}
                and Pay You Top Cash
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Toronto’s{" "}
                <span className="text-green-600">Most Trusted</span>{" "}
                Electronics Buyer. Trusted by 500+ Happy Customers ⭐⭐⭐⭐⭐
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Get Quote Button */}
              <Button
                
                size="lg"
                className="text-lg px-10 py-5 h-auto bg-green-600 shadow-lg hover:shadow-xl transition"
                onClick={() =>
                  document
                    .getElementById("get-quote")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Free Quote Now
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>

              {/* NEW BUTTON (REPLACED) */}
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-5 h-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
                onClick={() => navigate("/accepted-devices")}
              >
                Sell Tech for Cash
              </Button>

            </div>

            {/* Trust */}
            <div className="pt-6 border-t border-border/40 space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-green-600">
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