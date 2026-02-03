import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { TermsSection } from "@/components/TermsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      

      <HowItWorksSection />
      <WhyChooseUsSection />
      <QuoteFormSection />
      <TermsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
