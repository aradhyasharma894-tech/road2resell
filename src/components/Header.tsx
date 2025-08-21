import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/4c4b1188-99e7-4e99-9c7e-56074a7bde3e.png" 
            alt="Road2Resell - We come to you for electronics"
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Road2Resell
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              We Pay the Highest Value
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('get-quote')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Get Quote
          </button>
          <button
            onClick={() => scrollToSection('terms')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Contact Phone */}
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+14374777495" 
            className="hidden sm:flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>(437) 477-7495</span>
          </a>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('get-quote')}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};