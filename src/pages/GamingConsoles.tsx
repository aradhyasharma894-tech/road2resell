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
            Sell Video Game Consoles for<br />
             <span className="text-green-600"> Best Price</span> in{" "}
            <span className="text-green-600">Toronto GTA</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Road2Resell pays top cash offer for video game consoles and accesories in GTA. We buy{" "}
            <strong>
              Video Games and Consoles from your doorstep.
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
          src="/images/ps5.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* WE PAY CASH FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            Consoles We <span className="text-green-600">Buy</span>
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/ps55.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell PlayStation For Cash</h3>
              <p className="text-gray-600 text-sm">
                We pay cash for all PlayStation models. Sell PlayStation 5 for Cash in GTA
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/xbox.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Xbox for Cash</h3>
              <p className="text-gray-600 text-sm">
                Road2Resell buys Xbox Series X, Series S and Xbox One with fast quotes and competitive cash offers. Get Top Cash for special editions
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/nintendo.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Nintendo Switch for Cash</h3>
              <p className="text-gray-600 text-sm">
                Sell your Nintendo Switch for cash in Toronto and the GTA. Road2Resell buys Nintendo Switch, Switch 2, Switch OLED, and Switch Lite with fast quotes and competitive cash offers. Sell Nintendo Consoles For Cash.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/hg.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Handheld Gaming for Cash</h3>
              <p className="text-gray-600 text-sm">
                Sell Steam Deck, ROG Ally, and Legion Go devices for Cash. Get Top Cash For handheld Consoles in GTA.
              </p>
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
            <li>✔ Fully functional working condition with all buttons and dials operating correctly.</li>
            <li>✔ All passwords, parental controls, and user profiles must be completely cleared from the system.</li>
            <li>✔ The console serial number must be clean and the device not banned from online gaming services.</li>
                        

          </ul>
        </div>

        <img
          src="/images/px.jpg"
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
              desc: "Share your console's model and condition via our quick quote form to start the process.",
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
              desc: "Receive your payment instantly in cash or via e-transfer at the spot once your gear is verified.",
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
            <p key={i}>Sell Gaming Consoles for Cash in {city}</p>
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
            GAMING CONSOLES FAQs in Toronto &{" "}
            <span className="text-green-600">GTA</span>
          </h2>

          {[
            {
              q: "Where can I sell my Gaming Consoles for cash in Toronto?",
              a: "Road2Resell is the easiest way to sell Gaming Consoles for cash in Toronto and across the GTA. We offer free doorstep pickup and fast payment for all major brands.",
            },
            {
              q: "Which is the best place to sell Video Games near me?",
              a: "Road2Resell is the best place to sell your PS5 in Toronto & the GTA with top cash offers, fast payment, and free pickup.",
            },
            {
              q: "How fast will I get paid?",
              a: "Payment is instant cash once we collect your Consoles",
            },
            {
              q: "Where can I sell my Video Games and Consoles for cash in Toronto?",
              a: "Road2Resell is the best place to sell Video Games and Consoles in Toronto and the GTA with top cash offers and free pickup.",
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