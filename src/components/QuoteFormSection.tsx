import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Phone, Mail, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const QuoteFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    condition: "",
    image: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.product || !formData.condition) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "Thanks for your request! We'll review your device details and get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      condition: "",
      image: null
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setFormData({ ...formData, image: file });
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a JPG or PNG image.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="get-quote" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your device and we'll provide you with a competitive quote within 24 hours.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span>Device Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(437) 123-4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Product *</Label>
                  <Textarea
                    id="product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder="e.g., iPhone 14 Pro 128GB, MacBook Air M2, Samsung Galaxy Tab S8..."
                    className="h-24"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Product Condition *</Label>
                  <Select 
                    value={formData.condition} 
                    onValueChange={(value) => setFormData({ ...formData, condition: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-sealed">New Sealed</SelectItem>
                      <SelectItem value="flawless">Flawless</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Upload Picture (JPG/PNG)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="image"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="image" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {formData.image ? formData.image.name : "Click to upload device photos"}
                      </p>
                    </label>
                  </div>
                </div>

                <Button type="submit" variant="quote" size="lg" className="w-full">
                  Get My Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};