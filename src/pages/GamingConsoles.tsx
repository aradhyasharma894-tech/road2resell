import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const GamingConsoles = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedConsole, setSelectedConsole] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const consolePrices: Record<
    string,
    {
      name: string;
      category: string;
      prices: {
        Flawless: number;
        Good: number;
        Fair: number;
      };
    }
  > = {
    ps5Digital: {
      name: "PlayStation 5 Regular Digital",
      category: "PlayStation",
      prices: {
        Flawless: 280,
        Good: 250,
        Fair: 200,
      },
    },

    ps5Disc: {
      name: "PlayStation 5 Regular Disc",
      category: "PlayStation",
      prices: {
        Flawless: 330,
        Good: 270,
        Fair: 220,
      },
    },

    ps5SlimDigital: {
      name: "PlayStation 5 Slim Digital",
      category: "PlayStation",
      prices: {
        Flawless: 335,
        Good: 290,
        Fair: 250,
      },
    },

    ps5SlimDisc: {
      name: "PlayStation 5 Slim Disc",
      category: "PlayStation",
      prices: {
        Flawless: 375,
        Good: 320,
        Fair: 270,
      },
    },

    ps5Pro: {
      name: "PlayStation 5 Pro",
      category: "PlayStation",
      prices: {
        Flawless: 550,
        Good: 450,
        Fair: 350,
      },
    },

    xboxOneS500: {
      name: "Xbox One S 500GB",
      category: "Xbox",
      prices: {
        Flawless: 65,
        Good: 45,
        Fair: 30,
      },
    },

    xboxOneS1TB: {
      name: "Xbox One S 1TB",
      category: "Xbox",
      prices: {
        Flawless: 80,
        Good: 60,
        Fair: 40,
      },
    },

    xboxOneX: {
      name: "Xbox One X",
      category: "Xbox",
      prices: {
        Flawless: 120,
        Good: 80,
        Fair: 60,
      },
    },

    xboxSeriesS512: {
      name: "Xbox Series S 512GB",
      category: "Xbox",
      prices: {
        Flawless: 170,
        Good: 140,
        Fair: 100,
      },
    },

    xboxSeriesS1TB: {
      name: "Xbox Series S 1TB",
      category: "Xbox",
      prices: {
        Flawless: 200,
        Good: 160,
        Fair: 120,
      },
    },

    xboxSeriesX: {
      name: "Xbox Series X",
      category: "Xbox",
      prices: {
        Flawless: 325,
        Good: 255,
        Fair: 195,
      },
    },
  };

  const estimatedPrice =
    selectedConsole && selectedCondition
      ? consolePrices[selectedConsole]?.prices[
          selectedCondition as "Flawless" | "Good" | "Fair"
        ]
      : null;

  return (
    <>
      <Helmet>
        <title>
          Sell Gaming Consoles for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell PS5, Xbox, Nintendo Switch, Steam Deck and gaming consoles for top cash in Toronto & GTA. Get an instant estimated cash offer, free pickup and fast payment."
        />

        <meta
          name="keywords"
          content="sell PS5 Toronto, sell PS5 for cash Toronto, sell Xbox Toronto, sell Xbox for cash Toronto, sell Nintendo Switch GTA, gaming console buyer Toronto, cash for gaming consoles, sell gaming consoles Toronto"
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
          content="Get an instant estimated cash offer for your PS5, Xbox and gaming consoles with free pickup across Toronto & GTA."
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
            <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 mb-6">
              🎮 Gaming Console Buyers in Toronto & GTA
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-black">
              Sell Gaming Consoles for{" "}
              <span className="text-green-600">Cash</span> in Toronto GTA
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Road2Resell buys PlayStation, Xbox, Nintendo Switch, Steam Deck
              and other gaming consoles. Check your{" "}
              <strong>estimated cash offer instantly</strong>, then submit your
              details for a final quote and convenient GTA pickup.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("instant-quote")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Check Instant Price
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

        {/* INSTANT QUOTE CALCULATOR */}
        <section
          id="instant-quote"
          className="bg-gray-100 py-20 scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 mb-4">
                ⚡ Instant Gaming Console Quote
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-4">
                How Much Is Your Console{" "}
                <span className="text-green-600">Worth?</span>
              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Select your console and condition below to see your estimated
                cash offer instantly.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">

                {/* CONSOLE */}
                <div>
                  <label
                    htmlFor="console-select"
                    className="block text-lg font-bold mb-3"
                  >
                    1. Select Your Console
                  </label>

                  <select
                    id="console-select"
                    value={selectedConsole}
                    onChange={(e) => setSelectedConsole(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Choose your console</option>

                    <optgroup label="PlayStation 5">
                      <option value="ps5Digital">
                        PS5 Regular Digital
                      </option>

                      <option value="ps5Disc">
                        PS5 Regular Disc
                      </option>

                      <option value="ps5SlimDigital">
                        PS5 Slim Digital
                      </option>

                      <option value="ps5SlimDisc">
                        PS5 Slim Disc
                      </option>

                      <option value="ps5Pro">
                        PS5 Pro
                      </option>
                    </optgroup>

                    <optgroup label="Xbox">
                      <option value="xboxOneS500">
                        Xbox One S 500GB
                      </option>

                      <option value="xboxOneS1TB">
                        Xbox One S 1TB
                      </option>

                      <option value="xboxOneX">
                        Xbox One X
                      </option>

                      <option value="xboxSeriesS512">
                        Xbox Series S 512GB
                      </option>

                      <option value="xboxSeriesS1TB">
                        Xbox Series S 1TB
                      </option>

                      <option value="xboxSeriesX">
                        Xbox Series X
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* CONDITION */}
                <div>
                  <label className="block text-lg font-bold mb-3">
                    2. Select Condition
                  </label>

                  <div className="grid grid-cols-3 gap-3">
                    {["Flawless", "Good", "Fair"].map((condition) => (
                      <button
                        key={condition}
                        type="button"
                        onClick={() => setSelectedCondition(condition)}
                        className={`rounded-xl border-2 px-3 py-4 font-semibold transition ${
                          selectedCondition === condition
                            ? "border-green-600 bg-green-50 text-green-700"
                            : "border-gray-200 bg-white text-gray-700 hover:border-green-400"
                        }`}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Flawless:</strong> Excellent condition with minimal
                    signs of use.
                    <br />

                    <strong>Good:</strong> Normal signs of use with everything
                    working.
                    <br />

                    <strong>Fair:</strong> Noticeable wear but functional.
                  </div>
                </div>
              </div>

              {/* PRICE RESULT */}
              <div className="mt-10">
                {estimatedPrice ? (
                  <div className="rounded-2xl bg-green-50 border-2 border-green-200 p-8 text-center">
                    <p className="text-sm uppercase tracking-wide font-bold text-green-700">
                      Estimated Cash Offer
                    </p>

                    <div className="text-5xl md:text-6xl font-black text-green-600 mt-2">
                      ${estimatedPrice.toLocaleString("en-CA")} CAD
                    </div>

                    <p className="text-gray-600 mt-3">
                      For your{" "}
                      <strong>
                        {consolePrices[selectedConsole]?.name}
                      </strong>{" "}
                      in{" "}
                      <strong>{selectedCondition}</strong> condition.
                    </p>

                    <p className="text-xs text-gray-500 mt-4 max-w-xl mx-auto">
                      This is an estimated offer based on the selected model
                      and condition. Final value is subject to physical
                      inspection and verification.
                    </p>

                    <button
                      onClick={scrollToForm}
                      className="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-sm"
                    >
                      Get My Final Quote →
                    </button>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
                    <div className="text-4xl mb-3">💰</div>

                    <h3 className="text-xl font-bold">
                      Your estimated price will appear here
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Select your console and condition above.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* SPECIAL EDITION */}
            <div className="mt-8 rounded-xl bg-black text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                Have a Special Edition Console?
              </h3>

              <p className="text-gray-300 mb-4">
                Limited editions, bundles and special variants may have a
                different value.
              </p>

              <button
                onClick={scrollToForm}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Request a Custom Quote
              </button>
            </div>
          </div>
        </section>

        {/* WE BUY */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Consoles We <span className="text-green-600">Buy</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ps55.jpg"
                  loading="lazy"
                  alt="Sell PlayStation consoles for cash in Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell PlayStation for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy PS5, PS4 and PlayStation consoles for top cash in
                  Toronto GTA.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/xbox.jpg"
                  loading="lazy"
                  alt="Sell Xbox consoles for cash in Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Xbox for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy Xbox Series X, Series S and Xbox One consoles with
                  fast quotes and instant payment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/nintendo.jpg"
                  loading="lazy"
                  alt="Sell Nintendo Switch for cash in Toronto GTA"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Nintendo Switch for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Nintendo Switch, OLED, Lite and handheld consoles for
                  top cash in Toronto & GTA.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
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
                  Sell Steam Deck, ROG Ally and Legion Go handheld gaming
                  devices for cash.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FORM */}
        <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
          <QuoteFormSection
            selectedConsole={
              selectedConsole
                ? consolePrices[selectedConsole]?.name
                : ""
            }
            selectedCondition={selectedCondition}
            estimatedPrice={estimatedPrice}
          />
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
            alt="Gaming console condition standards for selling in Toronto GTA"
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
                title: "Check Your Price",
                desc: "Select your console and condition to see an instant estimated cash offer.",
              },
              {
                title: "Get a Final Quote",
                desc: "Submit your details so our team can confirm the offer.",
              },
              {
                title: "Free GTA Pickup",
                desc: "We provide convenient pickup across Toronto and the GTA.",
              },
              {
                title: "Instant Cash",
                desc: "Get paid once your console is inspected and verified.",
              },
            ].map((step, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-green-600 mb-2">
                  0{i + 1}
                </h3>

                <p className="font-bold">{step.title}</p>

                <p className="text-gray-600 text-sm mt-2">
                  {step.desc}
                </p>
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
              <p key={i}>
                Sell Gaming Consoles for Cash in {city}
              </p>
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
                q: "How much can I get for my PS5 in Toronto?",
                a: "Use our instant gaming console calculator to see an estimated cash offer based on your PS5 model and condition.",
              },
              {
                q: "Do you buy Nintendo Switch consoles?",
                a: "Yes. We buy Nintendo Switch, OLED and Lite models for top cash.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is made once your console has been inspected and verified.",
              },
              {
                q: "Do I need to visit a store?",
                a: "No. We come directly to your location anywhere in Toronto GTA.",
              },
              {
                q: "Do you buy broken gaming consoles?",
                a: "We may purchase consoles with certain issues. Submit the quote form or contact us for a custom assessment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl mb-4 shadow-sm"
              >
                <h3 className="font-bold mb-2">{item.q}</h3>

                <p className="text-gray-600 text-sm">
                  {item.a}
                </p>
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