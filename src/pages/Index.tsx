import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TermsSection } from "@/components/TermsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Quote Form */}
      <QuoteFormSection />

      {/* ✅ Accepted Devices Section (NEW) */}
      <div id="devices" className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-black mb-10">
            Turn Electronics Into <span className="text-green-600">Instant Cash</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

            {[
              { name: "Sell Phones for Cash", image: "/images/phones.jpg", path: "/phones" },
              { name: "Sell Laptops for Cash", image: "/images/laptops.jpg", path: "/laptops" },
              { name: "Sell Tablets for Cash", image: "/images/tablets.jpg", path: "/tablets" },
              { name: "Sell Gaming Consoles for Cash", image: "/images/gaming.jpg", path: "/gaming-consoles" },
              { name: "Sell Cameras for Cash", image: "/images/cameras.jpg", path: "/cameras" },
              { name: "Sell Drones for Cash", image: "/images/drones.jpg", path: "/drones" },
              { name: "Sell Smart Watches for Cash", image: "/images/watches.jpg", path: "/smart-watches" },
              { name: "Sell Headphones for Cash", image: "/images/headphones.jpg", path: "/headphones" },
              { name: "Sell Other Devices for Cash", image: "/images/others.jpg", path: "/other-devices" },
            ].map((device, index) => (
              <div
                key={index}
                onClick={() => (window.location.href = device.path)}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer bg-white"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Button */}
                <div className="py-5 flex justify-center">
                  <button className="border border-green-600 text-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition">
                    {device.name}
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Remaining Sections */}
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TermsSection />
      <ContactSection />
    </div>
  );
};

export default Index;