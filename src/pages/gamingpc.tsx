import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Phones = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-black leading-tight text-black">
            Sell Laptop, Macbook & Gaming PC <br />
            for <span className="text-green-600"> Top Cash</span> in{" "}
            <span className="text-green-600">Toronto</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Sell your laptop for cash with Road2Resell. Get Cash for{" "}
            <strong>
              Apple MacBook and brands like Dell, Acer, MSI, Razer, HP, Lenovo &
              Asus.
            </strong>{" "}
            No store visits. We come to you and pay you cash.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
  <button
    onClick={scrollToForm}
    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
  >
    Get a Quote
  </button>

  <a
    href="tel:+19426603737"
    className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
  >
    Call Us
  </a>
</div>
            
          
        </div>


        <img
          src="/images/macbook.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* WE PAY CASH FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            We Pay <span className="text-green-600">Cash</span> For:
          </h2>

          {/* FIXED GRID (2 ITEMS FAR APART) */}
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            
            {/* MACBOOK */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img
                src="/images/apple.png"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="font-bold text-lg mb-3">Sell MacBook</h3>
              <p className="text-gray-600 text-sm">
                We buy all MacBook models from 2015 onwards, sell Apple devices
                for top cash. Trade in MacBook for cash or sell my MacBook for
                cash.
              </p>
            </div>

            {/* LAPTOP & Gaming PC */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img
                src="/images/laptop1.png"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="font-bold text-lg mb-3">Sell Laptop & Gaming PC</h3>
              <p className="text-gray-600 text-sm">
                We buy laptop and Gaming PC of major brands including Dell, Acer, MSI, HP, Lenovo, and
                ASUS.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <img
                src="/images/gc.png"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="font-bold text-lg mb-3">Sell Gaming PC</h3>
              <p className="text-gray-600 text-sm">
                We buy Gaming PC of major brands for Cash.
              </p>
            </div>

          </div>

          <p className="mt-10 text-gray-600">
            All other major brands may also be eligible for top cash offers.
          </p>
        </div>
      </section>

      {/* FORM */}
      <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
        <QuoteFormSection />
      </div>

      {/* QUALIFICATION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black mb-6">
            Qualification <span className="text-green-600">Criteria</span>
          </h2>

          <ul className="space-y-4 text-gray-800 font-medium">
            <li>✔ Good Physical Condition</li>
            <li>✔ Powers on and functional</li>
            <li>✔ Remove all iCloud, BIOS, and firmware locks before sale</li>
            <li>✔ Devices must not be blacklisted or reported</li>
          </ul>
        </div>

        <img
          src="/images/person2.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-black mb-16">
          How to{" "}
          <span className="text-green-600">Sell & Get Paid?</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {[
            {
              title: "Send Laptop Details",
              desc: "Submit your MacBook or laptop model and condition via call or our quick quote form.",
            },
            {
              title: "Fast Offer",
              desc: "Get a high-value cash offer within minutes based on current electronics market rates.",
            },
            {
              title: "Doorstep Pickup",
              desc: "No store visits, we come to you.",
            },
            {
              title: "Instant Cash",
              desc: "Get paid on the spot in cash or e-transfer. No delays, no waiting periods.",
            },
          ].map((step, i) => (
            <div key={i}>
              <h3 className="text-4xl font-black text-green-600 mb-2">
                0{i + 1}
              </h3>
              <p className="font-bold">{step.title}</p>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-black mb-8">
          Service Locations –{" "}
          <span className="text-green-600">We Come To You</span>
        </h2>

        <div className="text-gray-800 space-y-2 font-medium">
          {[
            "Toronto",
            "Brampton",
            "North York",
            "Scarborough",
            "Etobicoke",
            "Mississauga",
            "Vaughan",
            "Markham",
            "Richmond Hill",
            "Pickering",
          ].map((city, i) => (
            <p key={i}>Sell Laptop for Cash in {city}</p>
          ))}
        </div>

        <button
          onClick={scrollToForm}
          className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Get Quote
        </button>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">
            Laptop & MacBook FAQs in Toronto &{" "}
            <span className="text-green-600">GTA</span>
          </h2>

          {[
            {
              q: "Where can I sell my Laptop & MacBook for cash in Toronto?",
              a: "Road2Resell is the easiest way to sell laptops and MacBooks for cash in Toronto and across the GTA. We offer free doorstep pickup and fast payment for all major brands.",
            },
            {
              q: "Which is the best place to sell MacBook near me?",
              a: "Road2Resell is the best place to sell your MacBook in Toronto & the GTA with top cash offers, fast payment, and free pickup.",
            },
            {
              q: "How fast will I get paid?",
              a: "Payment is instant cash once we collect your Laptop or MacBook.",
            },
            {
              q: "Where can I sell my gaming laptop for cash in Toronto?",
              a: "Road2Resell is the best place to sell gaming laptops in Toronto and the GTA with top cash offers and free pickup.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl mb-4 shadow-sm"
            >
              <h3 className="font-bold mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Phones;