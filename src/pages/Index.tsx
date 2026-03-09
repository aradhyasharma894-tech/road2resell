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

      {/* Move form here */}
      <QuoteFormSection />

      <HowItWorksSection />
      <WhyChooseUsSection />
      <TermsSection />
      <ContactSection />
    </div>
  );
};

export default Index;