import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-20 items-center justify-between px-4 gap-3 md:gap-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo2.png"
            alt="Road2Resell - We come to you for electronics"
            className="h-40 md:h-48 w-auto"
          />
          <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-black">Road2</span>
              <span className="text-green-600">Resell</span>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">
              Sell Electronics Right At Your Doorstep!
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => window.open("https://forms.gle/K3zg26oDVxsaXiNK9", "_blank")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Get Quote
          </button>
          <button
            onClick={() => document.getElementById("terms")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Call Now + Quote Button */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+19426603737"
            className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>Call Now</span>
          </a>
          <Button
            variant="hero"
            size="sm"
            onClick={() => window.open("https://forms.gle/K3zg26oDVxsaXiNK9", "_blank")}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};
