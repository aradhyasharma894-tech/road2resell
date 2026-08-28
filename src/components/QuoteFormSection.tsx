import { useState } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const QuoteFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myknkkld", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

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

        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Your <span className="text-green-600">Free Quote</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Fill in your device details to receive a fast
            cash quote from our team.
          </p>
        </div>

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
              onClick={() => setSubmitted(false)}
            >
              Submit Another Quote
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-border rounded-md p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-border rounded-md p-3"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              className="w-full border border-border rounded-md p-3"
            />

            <input
              type="text"
              name="product"
              placeholder="Product (e.g. iPhone 13, MacBook Air M1)"
              required
              className="w-full border border-border rounded-md p-3"
            />

            <div>
              <label className="block text-sm mb-2 font-medium">
                Product Condition
              </label>

              <select
                name="condition"
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

            <input
              type="text"
              name="storage"
              placeholder="Storage Size (if applicable) e.g. 128GB"
              className="w-full border border-border rounded-md p-3"
            />

            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700">
                {error}
              </div>
            )}

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