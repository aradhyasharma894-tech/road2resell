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
            Sell Tablets & Ipads <br />
            for <span className="text-green-600"> Top Cash</span> in{" "}
            <span className="text-green-600">Toronto</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Sell your Tablets & Ipads for cash with Road2Resell. Get Cash for{" "}
            <strong>
              Apple Ipad and other brands Tablets.
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
          src="/images/ipads.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* WE PAY CASH FOR */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">
            Devices We <span className="text-green-600">Accept</span>
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/ipadpro.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell iPad Pro</h3>
              <p className="text-gray-600 text-sm">
                High-end models including M1, M2, and latest generations.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/ipadair.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell iPad Air</h3>
              <p className="text-gray-600 text-sm">
                Fast M-series and A-series models. All storage sizes accepted.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/samsungtab.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Samsung Galaxy Tab</h3>
              <p className="text-gray-600 text-sm">
                Premium Galaxy Tabs and affordable A-series models.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/ipadmini.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell iPad Mini</h3>
              <p className="text-gray-600 text-sm">
                Compact performance tablets including latest iPad Mini versions.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/ipad.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell iPad</h3>
              <p className="text-gray-600 text-sm">
                Standard iPads of all generations accepted for cash.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/surface.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Sell Microsoft Surface</h3>
              <p className="text-gray-600 text-sm">
                Surface tablets and laptops for top cash in Toronto.
              </p>
            </div>

            {/* CARD 7 */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-left">
              <img src="/images/pencil.jpg" className="rounded mb-4 w-full h-40 object-cover" />
              <h3 className="font-bold text-lg mb-2">Apple Pencil</h3>
              <p className="text-gray-600 text-sm">
                We buy Apple Pencil accessories for cash.
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
            <li>✔ Screen Condition: Display must be free of cracks, chips, or dead pixels.</li>
            <li>✔ Battery Health: Capacity must hold a reliable charge and be in good health.</li>
            <li>✔ Functionality: All buttons, ports, speakers, and cameras must work perfectly.</li>
            <li>✔ Accessories: Including the Apple Pencil, original charger, or cables adds value.</li>
            <li>✔ Account Sign-out: All iCloud, Google, or Samsung accounts must be logged out.</li>
            <li>✔   Data Privacy: Devices must be factory reset and personal data wiped clean.</li>

          </ul>
        </div>

        <img
          src="/images/person3.jpg"
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-black mb-16">
          Where can I sell my Tablet or Ipad for{" "}
          <span className="text-green-600">cash in Toronto?</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {[
            {
              title: "Submit Details",
              desc: "Fill out our simple form with your tablet or iPad specs to receive an instant, high-value quote online.",
            },
            {
              title: "Fast Offer",
              desc: "Get a high-value cash offer within minutes based on current electronics market rates.",
            },
            {
              title: "Doorstep Pickup",
              desc: "We visit you anywhere in the GTA for a quick doorstep check and same-day pickup of your device.",
            },
            {
              title: "Instant Cash",
              desc: "Receive your cash payment right away on the spot once the verification is finished. Fast and secure.",
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
              q: "Where can I sell my Tablets & Ipad for cash in Toronto?",
              a: "Road2Resell is the easiest way to sell Tablets and Ipad for cash in Toronto and across the GTA. We offer free doorstep pickup and fast payment for all major brands.",
            },
            {
              q: "Which is the best place to sell Ipad near me?",
              a: "Road2Resell is the best place to sell your Ipad in Toronto & the GTA with top cash offers, fast payment, and free pickup.",
            },
            {
              q: "How fast will I get paid?",
              a: "Payment is instant cash once we collect your Tablet or Ipad.",
            },
            {
              q: "Where can I sell my Tablet for cash in Toronto?",
              a: "Road2Resell is the best place to sell Tablet in Toronto and the GTA with top cash offers and free pickup.",
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