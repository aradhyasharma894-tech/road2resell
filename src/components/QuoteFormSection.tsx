import { Button } from "@/components/ui/button";

export const QuoteFormSection = () => {
  return (
    <section id="get-quote" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Get Your <span className="text-primary">Free Quote</span> Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sell iPhones, laptops, tablets, cameras in Toronto GTA. 
          Fill in your details and upload photos directly through our secure Google Form. 
          Receive an <strong>instant cash offer</strong> and schedule doorstep pickup at your convenience.
        </p>

        {/* Quote Form Button */}
        <a
          href="https://forms.gle/K3zg26oDVxsaXiNK9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="quote" size="lg" className="px-10 py-6 text-lg">
            Open Quote Form
          </Button>
        </a>
      </div>
    </section>
  );
};
