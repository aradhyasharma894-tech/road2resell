import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { TermsSection } from "@/components/TermsSection";
import { ContactSection } from "@/components/ContactSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Google Reviews – Trust Booster */}
      <GoogleReviewsSection />

      <HowItWorksSection />
      <WhyChooseUsSection />
      <QuoteFormSection />
      <TermsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
