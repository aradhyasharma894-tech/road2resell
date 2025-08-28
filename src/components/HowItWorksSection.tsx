import { MessageSquare, Truck, DollarSign } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How{" "}
            <span className="text-black">Road2</span>
            <span className="text-green-600">Resell</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get cash for your electronics in three simple steps. We make it fast,
            easy, and convenient.
          </p>
        </div>

        {/* Storyboard Image Instead of Video */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/logo3.png"
              alt="How Road2Resell Works Storyboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">1. Tell Us What You Have</h3>
            <p className="text-muted-foreground">
              Fill out our quick form with your device details. Include photos
              and condition information for an accurate quote.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">2. We Come to You</h3>
            <p className="text-muted-foreground">
              Our team drives to your doorstep at a time that works for you. No
              need to travel or wait in lines.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">3. Instant Cash or Trade</h3>
            <p className="text-muted-foreground">
              Sell on the spot and get paid in cash immediately, or trade for
              something you need. Quick and transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
