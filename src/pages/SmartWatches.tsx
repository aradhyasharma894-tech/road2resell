import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const SmartWatches = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Smartwatches for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell Apple Watch, Samsung Galaxy Watch, Fitbit and smartwatches for top cash in Toronto & GTA. Free pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell Apple Watch Toronto, smartwatch buyer GTA, sell Fitbit Toronto, sell Samsung watch GTA, cash for smartwatches Toronto"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/smart-watches"
        />

        <meta
          property="og:title"
          content="Sell Smartwatches for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for Apple Watch, Samsung Galaxy Watch, Fitbit and smartwatches with free pickup across Toronto & GTA."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://road2resell.ca/smart-watches"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black leading-tight text-black">
              Sell Smartwatches for <br />
              <span className="text-green-600">Best Price</span> in{" "}
              <span className="text-green-600">Toronto GTA</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Road2Resell pays top cash offers for smartwatches in Toronto GTA.
              We buy{" "}
              <strong>
                Apple Watch, Samsung Galaxy Watch, Fitbit and smartwatches
              </strong>{" "}
              directly from your doorstep with free pickup and instant payment.
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
            src="/images/aw.jpg"
            loading="lazy"
            alt="Sell smartwatches for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* SMARTWATCHES WE BUY */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Smartwatches We <span className="text-green-600">Buy</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/awa.jpg"
                  loading="lazy"
                  alt="Sell Apple Watch Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Apple Watch
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy all Apple Watch models for top cash in Toronto GTA.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/sw.jpg"
                  loading="lazy"
                  alt="Sell Samsung Galaxy Watch Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Samsung Watches
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy Samsung Galaxy Watches with fast quotes and competitive
                  cash offers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/fb.jpg"
                  loading="lazy"
                  alt="Sell Fitbit Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Google & Fitbit Watches
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Google and Fitbit smartwatches for cash in Toronto GTA.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/sww.jpg"
                  loading="lazy"
                  alt="Sell smartwatches Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Other Smartwatch Brands
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy smartwatches from all major brands for top cash offers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FORM */}
        <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
          <QuoteFormSection />
        </div>

        {/* CONDITION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Condition <span className="text-green-600">Standards</span>
            </h2>

            <ul className="space-y-4 text-gray-800 font-medium">
              <li>✔ Fully functional working condition</li>
              <li>✔ Touchscreen, sensors and buttons should work properly</li>
              <li>✔ No major cracks or deep scratches</li>
              <li>✔ Remove all Apple, Google or Samsung account locks before sale</li>
            </ul>
          </div>

          <img
            src="/images/pww.jpg"
            loading="lazy"
            alt="Sell smartwatches in Toronto GTA"
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
                desc: "Share your smartwatch model and condition using our quote form.",
              },
              {
                title: "Get a Free Quote",
                desc: "Receive a competitive cash offer within minutes.",
              },
              {
                title: "Free GTA Pickup",
                desc: "We provide free pickup across Toronto and GTA.",
              },
              {
                title: "Instant Cash",
                desc: "Get paid instantly once your smartwatch is verified.",
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
              <p key={i}>Sell Smartwatches for Cash in {city}</p>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get Quote
          </button>
        </section>

        {/* RELATED DEVICES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-black text-center mb-10">
              Related <span className="text-green-600">Devices</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

              {[
                {
                  name: "Sell Phones",
                  path: "/phones",
                },

                {
                  name: "Sell Tablets",
                  path: "/tablets",
                },

                {
                  name: "Sell Headphones",
                  path: "/headphones",
                },

                {
                  name: "Sell Laptops",
                  path: "/laptops",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="border border-green-600 rounded-xl p-6 text-center font-semibold hover:bg-green-600 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-12">
              Smartwatch FAQs in Toronto &{" "}
              <span className="text-green-600">GTA</span>
            </h2>

            {[
              {
                q: "Where can I sell my Apple Watch for cash in Toronto?",
                a: "Road2Resell buys Apple Watch and smartwatches with free pickup across Toronto GTA.",
              },
              {
                q: "Do you buy Samsung and Fitbit watches?",
                a: "Yes. We buy Samsung Galaxy Watches, Fitbit watches and other smartwatch brands.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is instant once your smartwatch is verified.",
              },
              {
                q: "Do I need to visit a store?",
                a: "No. We come directly to your location anywhere in Toronto GTA.",
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
    </>
  );
};

export default SmartWatches;