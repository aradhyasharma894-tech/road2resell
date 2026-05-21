import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Phones = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Phones for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell iPhone, Samsung, Google Pixel, Motorola and other smartphones for top cash in Toronto & GTA. Free doorstep pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell phone Toronto, sell iPhone Toronto, smartphone buyer GTA, sell Samsung Toronto, cash for phones Toronto"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/phones"
        />

        <meta
          property="og:title"
          content="Sell Phones for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for iPhones, Samsung, Google Pixel and other smartphones with free pickup across Toronto & GTA."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://road2resell.ca/phones"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight text-black">
              Sell Smartphone <br />
              for <span className="text-green-600">Cash</span> in{" "}
              <span className="text-green-600">Toronto</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Check if your tech qualifies for instant cash. Sell{" "}
              <strong>iPhone, Google Pixel, Samsung & Motorola</strong> for top
              cash in Toronto GTA with free doorstep pickup.
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
            src="/images/phones.jpg"
            loading="lazy"
            alt="Sell smartphones for cash in Toronto and GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* WE PAY CASH FOR */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              We Pay <span className="text-green-600">Cash</span> For:
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "iPhone", img: "/images/apple.png" },
                { name: "Google Pixel", img: "/images/google.png" },
                { name: "Motorola", img: "/images/motorola.png" },
                { name: "Samsung", img: "/images/samsung.png" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <img
                    src={item.img}
                    loading="lazy"
                    alt={`Sell ${item.name} in Toronto`}
                    className="h-16 mx-auto mb-4 object-contain"
                  />

                  <h3 className="font-bold text-lg mb-2">
                    Sell {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Get best price for your {item.name} devices in Toronto.
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-600">
              All other major brands may also be eligible for top cash offers.
            </p>
          </div>
        </section>

        {/* SINGLE FORM */}
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
              <li>✔ Good physical condition</li>
              <li>✔ Powers on and functional</li>
              <li>✔ No activation or iCloud lock</li>
              <li>✔ Not stolen or blacklisted</li>
            </ul>
          </div>

          <img
            src="/images/person.jpg"
            loading="lazy"
            alt="Sell smartphones in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-100 py-20 text-center">
          <h2 className="text-4xl font-black mb-16">
            How to{" "}
            <span className="text-green-600">
              Sell Smartphone for Cash?
            </span>
          </h2>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
            {[
              "Contact Us",
              "Fast Response",
              "Doorstep Pickup",
              "Instant Cash",
            ].map((step, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-green-600 mb-2">
                  0{i + 1}
                </h3>

                <p className="font-bold">{step}</p>

                <p className="text-gray-600 text-sm mt-2">
                  Simple and fast process for selling your device.
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
              <p key={i}>Sell Smartphone for Cash in {city}</p>
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
                  name: "Sell Tablets",
                  path: "/tablets",
                },

                {
                  name: "Sell Smartwatches",
                  path: "/smart-watches",
                },

                {
                  name: "Sell Laptops",
                  path: "/laptops",
                },

                {
                  name: "Sell Headphones",
                  path: "/headphones",
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
              Phone Selling FAQs in Toronto &{" "}
              <span className="text-green-600">GTA</span>
            </h2>

            {[
              "Where can I sell my phone near me?",
              "How can I sell my phone instantly?",
              "Which places buy smartphones for cash?",
              "What is the best place to sell a smartphone for cash?",
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl mb-4 shadow-sm"
              >
                <h3 className="font-bold mb-2">{q}</h3>

                <p className="text-gray-600 text-sm">
                  Road2Resell offers fast pickup, instant quotes, and same-day
                  payment.
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

export default Phones;