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
            Sell Speakers, Mics & Electronics for<br />
             <span className="text-green-600"> Best Price</span> in{" "}
            <span className="text-green-600">Toronto GTA</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Road2Resell pays top cash offer for Electronics in GTA. We buy{" "}
            <strong>
              Electronics from your doorstep.
            </strong>{" "}
            Get free doorstep pickup and instant cash. Skip the marketplace hassle and get paid today
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
          src="/images/elec2.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* WE PAY CASH FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            Electronics We <span className="text-green-600">Buy</span>
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/spk.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Speakers For Cash</h3>
              <p className="text-gray-600 text-sm">
                We pay cash for all Speaker models. Sell Speakers for Cash in GTA
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/rode.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Microphones for Cash</h3>
              <p className="text-gray-600 text-sm">
                Road2Resell buys Microphones with fast quotes and competitive cash offers.               </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/elec.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Other Electronics for Cash</h3>
              <p className="text-gray-600 text-sm">
                Sell your other electronics for cash in Toronto and the GTA. Road2Resell buys electronics with fast quotes and competitive cash offers.               </p>
            </div>

           
            
          </div>
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
            Condition <span className="text-green-600">Standards</span>
          </h2>

          <ul className="space-y-4 text-gray-800 font-medium">
            <li>✔ Fully functional working condition with all internal components, ports (USB/HDMI), and wireless connectivity (Wi-Fi/Bluetooth) operating exactly as intended by the manufacturer.</li>
            <li>✔ No significant physical damage such as deep dents, heavy scratches, or cracks that suggest the device was dropped, and no signs of liquid contact or internal corrosion.</li>
            <li>✔ All personal data and security locks must be cleared </li>
                        

          </ul>
        </div>

        <img
          src="/images/pel.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-black mb-16">
          Our Simple{" "}
          <span className="text-green-600">How-to-Sell Process</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {[
            {
              title: "Send Details",
              desc: "Share your Electronics model and condition via our quick quote form to start the process.",
            },
            {
              title: "Get a Free Quote",
              desc: "Receive a fair and competitive cash offer within minutes, aligned with current market values.",
            },
            {
              title: "Free GTA Pickup",
              desc: "Accepted the quote? We will arrange a free doorstep pickup or local meetup across the Toronto GTA region.",
            },
            {
              title: "Instant Cash Payment",
              desc: "Receive your payment instantly in cash or via e-transfer at the spot once your Device is verified.",
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
            Camera & Gears FAQs in Toronto &{" "}
            <span className="text-green-600">GTA</span>
          </h2>

          {[
            {
              q: "Where can I sell my Speakers for cash in Toronto?",
              a: "Road2Resell is the easiest way to sell Speakers for cash in Toronto and across the GTA. We offer free doorstep pickup and fast payment for all major brands.",
            },
            {
              q: "Which is the best place to sell Microphones near me?",
              a: "Road2Resell is the best place to sell your Microphones in Toronto & the GTA with top cash offers, fast payment, and free pickup.",
            },
            {
              q: "How fast will I get paid?",
              a: "Payment is instant cash once we collect your Device",
            },
            {
              q: "Where can I sell my electronics for cash in Toronto?",
              a: "Road2Resell is the best place to sell electronics in Toronto and the GTA with top cash offers and free pickup.",
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