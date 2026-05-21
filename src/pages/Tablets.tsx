import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Tablets = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Tablets & iPads for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell iPads, Samsung Galaxy Tabs, Microsoft Surface tablets and more for top cash in Toronto & GTA. Free pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell iPad Toronto, sell tablet Toronto, tablet buyer GTA, cash for iPad Toronto, sell Samsung tablet GTA"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/tablets"
        />

        <meta
          property="og:title"
          content="Sell Tablets & iPads for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for iPads, Samsung Galaxy Tabs, Microsoft Surface tablets and more with free pickup across Toronto & GTA."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://road2resell.ca/tablets"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black leading-tight text-black">
              Sell Tablets & iPads <br />
              for <span className="text-green-600">Top Cash</span> in{" "}
              <span className="text-green-600">Toronto</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Sell your Tablets & iPads for cash with Road2Resell. Get Cash for{" "}
              <strong>
                Apple iPad and other major tablet brands.
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
            loading="lazy"
            alt="Sell iPads and tablets for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* WE PAY CASH FOR */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Devices We <span className="text-green-600">Accept</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ipadpro.jpg"
                  loading="lazy"
                  alt="Sell iPad Pro Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">Sell iPad Pro</h3>
                <p className="text-gray-600 text-sm">
                  High-end models including M1, M2, and latest generations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ipadair.jpg"
                  loading="lazy"
                  alt="Sell iPad Air Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">Sell iPad Air</h3>
                <p className="text-gray-600 text-sm">
                  Fast M-series and A-series models.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/samsungtab.jpg"
                  loading="lazy"
                  alt="Sell Samsung Galaxy Tab Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">
                  Sell Samsung Galaxy Tab
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium Galaxy Tabs and affordable A-series models.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ipadmini.jpg"
                  loading="lazy"
                  alt="Sell iPad Mini Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">Sell iPad Mini</h3>
                <p className="text-gray-600 text-sm">
                  Compact performance tablets including latest iPad Mini versions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ipad.jpg"
                  loading="lazy"
                  alt="Sell iPad Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">Sell iPad</h3>
                <p className="text-gray-600 text-sm">
                  Standard iPads of all generations accepted for cash.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/surface.jpg"
                  loading="lazy"
                  alt="Sell Microsoft Surface Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-lg mb-2">
                  Sell Microsoft Surface
                </h3>
                <p className="text-gray-600 text-sm">
                  Surface tablets and laptops for top cash in Toronto.
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
              <li>✔ Screen must be free of major cracks</li>
              <li>✔ Device should power on properly</li>
              <li>✔ Battery should function normally</li>
              <li>✔ Remove all iCloud or Google locks</li>
              <li>✔ Device must not be blacklisted</li>
            </ul>
          </div>

          <img
            src="/images/person3.jpg"
            loading="lazy"
            alt="Sell tablets and iPads in Toronto GTA"
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
                title: "Send Tablet Details",
                desc: "Submit your iPad or tablet model and condition via our quick quote form.",
              },
              {
                title: "Fast Offer",
                desc: "Receive a competitive cash offer within minutes.",
              },
              {
                title: "Doorstep Pickup",
                desc: "We come directly to your location anywhere in Toronto GTA.",
              },
              {
                title: "Instant Cash",
                desc: "Get paid immediately by cash or e-transfer.",
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
              <p key={i}>Sell Tablets for Cash in {city}</p>
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
              Tablet & iPad FAQs in Toronto &{" "}
              <span className="text-green-600">GTA</span>
            </h2>

            {[
              {
                q: "Where can I sell my iPad for cash in Toronto?",
                a: "Road2Resell offers top cash for iPads and tablets across Toronto and the GTA with free pickup.",
              },
              {
                q: "Do you buy Samsung tablets?",
                a: "Yes. We buy Samsung Galaxy Tabs, Microsoft Surface tablets and more.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is instant once we collect your device.",
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

export default Tablets;