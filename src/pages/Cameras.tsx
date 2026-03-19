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
            Sell Digital Cameras & Lenses <br />
            for <span className="text-green-600"> Top Cash</span> in{" "}
            <span className="text-green-600">Toronto</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Turn your camera gear and lenses into instant payment. We buy{" "}
            <strong>
              DSLR's, mirrorless cameras, compact digital camera and lenses.
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
          src="/images/dslr.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* WE PAY CASH FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            Camera Gear We <span className="text-green-600">Accept</span>
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/dslr.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell DSLR Cameras</h3>
              <p className="text-gray-600 text-sm">
                Sell Canon or Nikon DSLR Camera for cash with Road2Resell.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/mc.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Mirrorless Camera</h3>
              <p className="text-gray-600 text-sm">
                Get cash for Sony, Canon, Fujifilm or Nikon Mirrorless Cameras.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/pc.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Point-and-Shoot Cameras</h3>
              <p className="text-gray-600 text-sm">
                Sell any compact size digital camera for cash such as Finepix, Coolpix, PowerShot or Cyber-Shot.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/lg.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Lenses & Gear</h3>
              <p className="text-gray-600 text-sm">
                We buy Camera lenses, Drone and Gimbals For Cash. 
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
            <li>✔ No major physical damage or fungus on the sensor or lens optics.</li>
            <li>✔ The device must be free from water damage, moisture, or internal corrosion.</li>
                        

          </ul>
        </div>

        <img
          src="/images/dslr2.jpg"
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
              title: "Send Camera Details",
              desc: "Give us a call or Submit photos and specifications for your digital camera, lenses, and accessories via our form or email.",
            },
            {
              title: "Get a Free Quote",
              desc: "We will review your hardware and provide a competitive cash quote based on current market values.",
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
            <p key={i}>Sell Cameras for Cash in {city}</p>
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
              q: "Where can I sell my Camera & Gears for cash in Toronto?",
              a: "Road2Resell is the easiest way to sell Camera and Gears for cash in Toronto and across the GTA. We offer free doorstep pickup and fast payment for all major brands.",
            },
            {
              q: "Which is the best place to sell DSLR near me?",
              a: "Road2Resell is the best place to sell your DSLR in Toronto & the GTA with top cash offers, fast payment, and free pickup.",
            },
            {
              q: "How fast will I get paid?",
              a: "Payment is instant cash once we collect your DSLR or Lens.",
            },
            {
              q: "Where can I sell my Camera & Lenses for cash in Toronto?",
              a: "Road2Resell is the best place to sell Camera & Lenses in Toronto and the GTA with top cash offers and free pickup.",
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