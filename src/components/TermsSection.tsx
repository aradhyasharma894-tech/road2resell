import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, CreditCard, UserCheck, RotateCcw } from "lucide-react";

export const TermsSection = () => {
  const policies = [
    {
      title: "For Buyers",
      items: [
        "7-Day No-Questions-Asked Refund: You may return any item within 7 days for a full refund, as long as it's in the same condition as sold and with the receipt.",
        "After 7 days, all sales are final, unless a separate warranty was provided.",
        "Warranty (if given) covers basic functionality only, not damage, misuse, or normal wear and tear."
      ]
    },
    {
      title: "For Sellers",
      items: [
        "All sales to Road2Resell are final.",
        "Once payment is made, the device becomes our property and cannot be returned."
      ]
    }
  ];

  return (
    <section id="terms" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Road2Resell – <span className="text-primary">Warranty & Refund Policy</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {policy.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-primary text-lg">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};