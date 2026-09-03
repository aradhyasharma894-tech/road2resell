import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

interface QuoteFormSectionProps {
  selectedConsole?: string;
  selectedCondition?: string;
  estimatedPrice?: number | null;
}

export const QuoteFormSection = ({
  selectedConsole = "",
  selectedCondition = "",
  estimatedPrice = null,
}: QuoteFormSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [product, setProduct] = useState(selectedConsole);
  const [condition, setCondition] = useState(selectedCondition);

  // Update the form automatically when the customer changes
  // their selection in the gaming-console calculator.
  useEffect(() => {
    if (selectedConsole) {
      setProduct(selectedConsole);
    }
  }, [selectedConsole]);

  useEffect(() => {
    if (selectedCondition) {
      setCondition(selectedCondition);
    }
  }, [selectedCondition]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/myknkkld",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        // Formspree successfully received the lead.
        // Tell Google Tag Manager that a real lead was submitted.
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "road2resell_quote_submitted",
        });

        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "Something went wrong while submitting your request. Please try again."
        );
      }
    } catch {
      setError(
        "Unable to submit your request. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-quote" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Your{" "}
            <span className="text-green-600">Free Quote</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Fill in your device details to receive a fast
            cash quote from our team.
          </p>
        </div>

        {/* SUCCESS */}
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Quote Request Received!
            </h3>

            <p className="text-green-700">
              Thank you! Our team will review your device details
              and contact you shortly.
            </p>

            <Button
              type="button"
              className="mt-6 bg-green-600 text-white hover:bg-green-700"
              onClick={() => {
                setSubmitted(false);
                setProduct(selectedConsole);
                setCondition(selectedCondition);
              }}
            >
              Submit Another Quote
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-border rounded-md p-3"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-border rounded-md p-3"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              className="w-full border border-border rounded-md p-3"
            />

            {/* Product */}
            <input
              type="text"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Product (e.g. iPhone 13, MacBook Air M1)"
              required
              className="w-full border border-border rounded-md p-3"
            />

            {/* Product Condition */}
            <div>
              <label className="block text-sm mb-2 font-medium">
                Product Condition
              </label>

              <select
                name="condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
                className="w-full border border-border rounded-md p-3"
              >
                <option value="">Select Condition</option>
                <option value="New Sealed">New Sealed</option>
                <option value="Flawless">Flawless</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>

            {/* Gaming Calculator Information */}
            {selectedConsole && estimatedPrice !== null && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <p className="text-sm font-semibold text-green-700 mb-2">
                  Gaming Console Price Estimate
                </p>

                <div className="text-gray-800 space-y-1 text-sm">
                  <p>
                    <strong>Console:</strong>{" "}
                    {selectedConsole}
                  </p>

                  <p>
                    <strong>Condition:</strong>{" "}
                    {selectedCondition}
                  </p>

                  <p>
                    <strong>Estimated Cash Offer:</strong>{" "}
                    <span className="text-green-700 font-bold">
                      ${estimatedPrice.toLocaleString("en-CA")} CAD
                    </span>
                  </p>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Final value is subject to physical inspection and
                  verification.
                </p>
              </div>
            )}

            {/* Hidden fields for Formspree */}
            {selectedConsole && (
              <input
                type="hidden"
                name="calculator_console"
                value={selectedConsole}
              />
            )}

            {selectedCondition && (
              <input
                type="hidden"
                name="calculator_condition"
                value={selectedCondition}
              />
            )}

            {estimatedPrice !== null && (
              <input
                type="hidden"
                name="estimated_cash_offer"
                value={`$${estimatedPrice} CAD`}
              />
            )}

            {/* Storage */}
            <input
              type="text"
              name="storage"
              placeholder="Storage Size (if applicable) e.g. 128GB"
              className="w-full border border-border rounded-md p-3"
            />

            {/* Hidden anti-spam */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            {/* Error */}
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700">
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-lg py-6 bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Quote Request"}
            </Button>

          </form>
        )}
      </div>
    </section>
  );
};