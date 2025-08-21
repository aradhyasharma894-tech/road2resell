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
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Road2Resell
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
          <div className="hidden sm:flex items-center space-x-2 text-sm font-medium">
            <Phone className="h-4 w-4 text-primary" />
            <span>(437) 477-7495</span>
          </div>
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