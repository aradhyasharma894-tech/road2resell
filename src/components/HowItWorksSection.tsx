import { Play, MessageSquare, Truck, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How <span className="text-primary">Road2Resell</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get cash for your electronics in three simple steps. We make it fast, easy, and convenient.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light">
            <div className="aspect-video flex items-center justify-center">
              <Button variant="hero" size="lg" className="rounded-full w-20 h-20">
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              Watch How It Works
            </div>
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
              Fill out our quick form with your device details. Include photos and condition information for an accurate quote.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">2. We Come to You</h3>
            <p className="text-muted-foreground">
              Our team drives to your doorstep at a time that works for you. No need to travel or wait in lines.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">3. Instant Cash or Trade</h3>
            <p className="text-muted-foreground">
              Sell on the spot and get paid in cash immediately, or trade for something you need. Quick and transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};