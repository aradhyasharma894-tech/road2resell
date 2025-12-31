import { MessageSquare, Truck, DollarSign } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How{" "}
            <span className="text-black">Road2</span>
            <span className="text-green-600">Resell</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get cash for your electronics in Toronto GTA in three simple steps. 
            Sell iPhones, laptops, tablets, cameras – we make it fast, easy, and convenient.
          </p>
        </div>

        {/* Storyboard Image Instead of Video */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/logo3.png"
              alt="How to sell electronics in Toronto - iPhones, laptops, tablets, cameras for instant cash"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">
              1. Tell Us What You Have
            </h3>
            <p className="text-muted-foreground">
              Fill out our quick form with your device details. Include photos 
              and condition information for an accurate quote. Sell iPhones, 
              laptops, tablets, cameras in Toronto GTA.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">2. We Come to You</h3>
            <p className="text-muted-foreground">
              Our team drives to your doorstep anywhere in Toronto GTA. 
              Get electronics pickup at your home – no need to travel, wait, or worry.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">3. Instant Cash or Trade</h3>
            <p className="text-muted-foreground">
              Sell your devices on the spot and get paid in cash immediately, 
              or trade for something you need. Instant cash for electronics in Toronto GTA, safe and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
