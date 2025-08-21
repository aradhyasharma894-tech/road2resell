import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, CreditCard, UserCheck, RotateCcw } from "lucide-react";

export const TermsSection = () => {
  const terms = [
    {
      icon: UserCheck,
      title: "You must own the device",
      description: "Only sell items that belong to you. Stolen, lost, or unpaid-financed devices are not accepted."
    },
    {
      icon: FileText,
      title: "Device condition",
      description: "We buy new, used, or broken electronics, but we may refuse any item after inspection."
    },
    {
      icon: CreditCard,
      title: "Payment",
      description: "Once we inspect and agree on a price, payment is made on the spot via cash."
    },
    {
      icon: Shield,
      title: "ID verification",
      description: "A valid photo ID may be required. Serial numbers/IMEIs are checked to prevent fraud."
    },
    {
      icon: RotateCcw,
      title: "No returns",
      description: "Once payment is made, the device belongs to Road2Resell."
    }
  ];

  return (
    <section id="terms" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Seller <span className="text-primary">Terms & Conditions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please review our terms before selling your device to ensure a smooth transaction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <term.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{term.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{term.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};