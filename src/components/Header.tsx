import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (location.pathname === "/") {
      // Already on homepage → just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go to homepage first, then scroll
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-20 items-center justify-between px-4 gap-3 md:gap-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/logo2.png"
            alt="Road2Resell"
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
          <button onClick={() => handleNav("home")} className="nav-btn">
            Home
          </button>

          <button onClick={() => handleNav("how-it-works")} className="nav-btn">
            How It Works
          </button>

          <button onClick={() => handleNav("get-quote")} className="nav-btn">
            Get Quote
          </button>

          <button onClick={() => handleNav("terms")} className="nav-btn">
            Terms & Conditions
          </button>

          <button onClick={() => handleNav("contact")} className="nav-btn">
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+19426603737"
            className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5 text-green-600" />
            <span>Call Now</span>
          </a>

          <Button size="sm" onClick={() => handleNav("get-quote")} className="bg-green-600 hover:bg-green-700 text-white">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};