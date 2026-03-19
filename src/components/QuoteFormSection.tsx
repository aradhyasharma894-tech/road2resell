import { Button } from "@/components/ui/button";

export const QuoteFormSection = () => {
  return (
    <section id="get-quote" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Your <span className="text-green-600">Free Quote</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Fill in your device details to receive a fast
            cash quote from our team.
          </p>
        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/myknkkld"
          method="POST"
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

          {/* Phone (Mandatory) */}
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

          {/* Storage */}
          <input
            type="text"
            name="storage"
            placeholder="Storage Size (if applicable) e.g. 128GB"
            className="w-full border border-border rounded-md p-3"
          />

          {/* Hidden anti-spam */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full text-lg py-6 bg-green-600 text-white hover:bg-green-700"
          >
            Submit Quote Request
          </Button>

        </form>
      </div>
    </section>
  );
};