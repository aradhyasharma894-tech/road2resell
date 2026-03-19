import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo2.png"
            alt="Road2Resell"
            className="h-10 md:h-14 w-auto"   // 🔥 FIXED SIZE
          />
          <div className="flex flex-col leading-tight">
            <div className="text-base md:text-xl font-bold">
              <span className="text-black">Road2</span>
              <span className="text-green-600">Resell</span>
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground">
              Sell Electronics Doorstep
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => navigate("/")} className="nav-btn">
            Home
          </button>
          <button onClick={() => navigate("/how-it-works")} className="nav-btn">
            How It Works
          </button>
          <button onClick={() => navigate("/get-quote")} className="nav-btn">
            Get Quote
          </button>
          <button onClick={() => navigate("/terms")} className="nav-btn">
            Terms
          </button>
          <button onClick={() => navigate("/contact")} className="nav-btn">
            Contact
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Call (hide on small screens if needed) */}
          <a
            href="tel:+19426603737"
            className="hidden sm:flex items-center space-x-1 text-sm"
          >
            <Phone className="h-4 w-4 text-green-600" />
          </a>

          {/* Button */}
          <Button
            size="sm"
            onClick={() => navigate("/get-quote")}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-xs md:text-sm"
          >
            Quote
          </Button>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <button onClick={() => {navigate("/"); setMenuOpen(false);}} className="block w-full text-left">
            Home
          </button>
          <button onClick={() => {navigate("/how-it-works"); setMenuOpen(false);}} className="block w-full text-left">
            How It Works
          </button>
          <button onClick={() => {navigate("/get-quote"); setMenuOpen(false);}} className="block w-full text-left">
            Get Quote
          </button>
          <button onClick={() => {navigate("/terms"); setMenuOpen(false);}} className="block w-full text-left">
            Terms & Conditions
          </button>
          <button onClick={() => {navigate("/contact"); setMenuOpen(false);}} className="block w-full text-left">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};