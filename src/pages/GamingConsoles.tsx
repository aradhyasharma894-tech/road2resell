import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const GamingConsoles = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Gaming Consoles for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell PS5, Xbox, Nintendo Switch, Steam Deck and gaming consoles for top cash in Toronto & GTA. Free pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell PS5 Toronto, sell Xbox Toronto, sell Nintendo Switch GTA, gaming console buyer Toronto, cash for gaming consoles"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/gaming-consoles"
        />

        <meta
          property="og:title"
          content="Sell Gaming Consoles for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for PS5, Xbox, Nintendo Switch and gaming consoles with free pickup across Toronto & GTA."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://road2resell.ca/gaming-consoles"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black leading-tight text-black">
              Sell Video Game Consoles for <br />
              <span className="text-green-600">Best Price</span> in{" "}
              <span className="text-green-600">Toronto GTA</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Road2Resell pays top cash offers for video game consoles and
              accessories in GTA. We buy{" "}
              <strong>
                PlayStation, Xbox, Nintendo Switch, Steam Deck and gaming devices
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
            src="/images/ps5.jpg"
            loading="lazy"
            alt="Sell gaming consoles for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* WE BUY */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Consoles We <span className="text-green-600">Buy</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ps55.jpg"
                  loading="lazy"
                  alt="Sell PlayStation Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell PlayStation for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy PS5, PS4 and PlayStation consoles for top cash in Toronto GTA.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/xbox.jpg"
                  loading="lazy"
                  alt="Sell Xbox Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Xbox for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy Xbox Series X, Series S and Xbox One consoles with fast
                  quotes and instant payment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/nintendo.jpg"
                  loading="lazy"
                  alt="Sell Nintendo Switch Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Nintendo Switch for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Nintendo Switch, OLED, Lite and handheld consoles for top
                  cash in Toronto & GTA.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/hg.jpg"
                  loading="lazy"
                  alt="Sell handheld gaming consoles Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Handheld Gaming Consoles
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Steam Deck, ROG Ally and Legion Go handheld gaming devices
                  for cash.
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
              <li>✔ Fully functional condition</li>
              <li>✔ Controllers and buttons should work properly</li>
              <li>✔ Remove all user accounts and parental controls</li>
              <li>✔ Console must not be banned or blacklisted</li>
            </ul>
          </div>

          <img
            src="/images/px.jpg"
            loading="lazy"
            alt="Sell gaming consoles in Toronto GTA"
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
                desc: "Share your console model and condition using our quote form.",
              },
              {
                title: "Get a Free Quote",
                desc: "Receive a competitive offer based on market value.",
              },
              {
                title: "Free GTA Pickup",
                desc: "We provide free pickup across Toronto and GTA.",
              },
              {
                title: "Instant Cash",
                desc: "Get paid instantly once your console is verified.",
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

        {/* RELATED DEVICES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-black text-center mb-10">
              Related <span className="text-green-600">Devices</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

              {[
                {
                  name: "Sell Laptops",
                  path: "/laptops",
                },

                {
                  name: "Sell Headphones",
                  path: "/headphones",
                },

                {
                  name: "Sell Phones",
                  path: "/phones",
                },

                {
                  name: "Sell Other Devices",
                  path: "/other-devices",
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
              Gaming Console FAQs in Toronto &{" "}
              <span className="text-green-600">GTA</span>
            </h2>

            {[
              {
                q: "Where can I sell my PS5 for cash in Toronto?",
                a: "Road2Resell buys PS5, Xbox and gaming consoles with free pickup across Toronto GTA.",
              },
              {
                q: "Do you buy Nintendo Switch consoles?",
                a: "Yes. We buy Nintendo Switch, OLED and Lite models for top cash.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is instant once your console is verified.",
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

export default GamingConsoles;