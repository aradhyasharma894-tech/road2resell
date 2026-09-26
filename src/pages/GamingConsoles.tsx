import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const GamingConsoles = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://road2resell.ca/gaming-consoles#webpage",
        url: "https://road2resell.ca/gaming-consoles",
        name:
          "Sell Gaming Consoles, PS5 & Xbox for Cash in Toronto | Road2Resell",
        description:
          "Sell PS5, Xbox, Nintendo Switch and gaming consoles for cash in Toronto and the GTA. Get a fast quote, convenient pickup and payment after inspection.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://road2resell.ca/#business",
        name: "Road2Resell",
        url: "https://road2resell.ca/",
        telephone: "+19426603737",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://road2resell.ca/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gaming Consoles",
            item: "https://road2resell.ca/gaming-consoles",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Gaming Consoles, PS5 & Xbox for Cash in Toronto | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell PS5, Xbox, Nintendo Switch and gaming consoles for cash in Toronto & GTA. Get a fast quote, convenient pickup and payment after inspection."
        />

        <meta
          name="keywords"
          content="sell gaming consoles Toronto, sell PS5 Toronto, sell PS5 for cash Toronto, sell Xbox Toronto, sell Xbox for cash Toronto, sell Nintendo Switch Toronto, gaming console buyer Toronto, cash for gaming consoles Toronto, sell gaming console GTA"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/gaming-consoles"
        />

        <meta
          property="og:title"
          content="Sell Gaming Consoles, PS5 & Xbox for Cash in Toronto | Road2Resell"
        />

        <meta
          property="og:description"
          content="Sell your PS5, Xbox, Nintendo Switch and other gaming consoles for cash with convenient pickup across Toronto & GTA."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://road2resell.ca/gaming-consoles"
        />

        <meta
          property="og:image"
          content="https://road2resell.ca/images/ps5.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
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
              Sell Gaming Consoles, PS5 & Xbox for{" "}
              <span className="text-green-600">Cash</span> in Toronto GTA
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Looking to sell a PS5, Xbox, Nintendo Switch, Steam Deck or
              another gaming console in Toronto? Road2Resell buys supported
              gaming consoles across Toronto and the GTA. Get a fast quote,
              convenient pickup and payment after your console is inspected and
              verified.
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

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span>✓ Fast quote</span>
              <span>✓ GTA pickup</span>
              <span>✓ Fast payment</span>
            </div>
          </div>

          <img
            src="/images/ps5.jpg"
            loading="lazy"
            alt="Sell PS5 and gaming consoles for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* SEO INTRO */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">
              Sell Your Gaming Console for Cash in Toronto
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              If you have a PlayStation, Xbox, Nintendo Switch or handheld
              gaming console you no longer use, Road2Resell can help you sell
              it in Toronto and the GTA. Tell us your exact console model,
              condition and included accessories to get started with a quote.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">
                  Sell PS5 in Toronto
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Sell supported PS5 Disc and Digital Edition consoles.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">
                  Sell Xbox in Toronto
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Sell Xbox Series X, Series S and supported Xbox consoles.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">
                  Sell Nintendo Switch
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Sell Nintendo Switch, OLED and Lite models.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">
                  Sell Gaming Handhelds
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Ask about supported Steam Deck and other handheld systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WE BUY */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Gaming Consoles We <span className="text-green-600">Buy</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/ps55.jpg"
                  loading="lazy"
                  alt="Sell PlayStation PS5 and PS4 consoles for cash in Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell PlayStation for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy supported PS5, PS4 and PlayStation consoles in
                  Toronto and the GTA. Include the exact model and condition
                  when requesting a quote.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/xbox.jpg"
                  loading="lazy"
                  alt="Sell Xbox Series X Series S and Xbox consoles for cash in Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Xbox for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy supported Xbox Series X, Series S and Xbox One
                  consoles. Submit your console details for a quote.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/nintendo.jpg"
                  loading="lazy"
                  alt="Sell Nintendo Switch OLED and Lite for cash in Toronto GTA"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Nintendo Switch for Cash
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Nintendo Switch, OLED and Lite models in Toronto and the
                  GTA. Tell us the exact model and condition.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/hg.jpg"
                  loading="lazy"
                  alt="Sell handheld gaming consoles in Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Handheld Gaming Consoles
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell supported Steam Deck, ROG Ally and Legion Go handheld
                  gaming devices for cash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
          <QuoteFormSection />
        </div>

        {/* WHAT AFFECTS VALUE */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-6">
              What Information Helps Us Quote Your{" "}
              <span className="text-green-600">Gaming Console?</span>
            </h2>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Providing accurate details about your gaming console helps us
              evaluate the device and respond to your quote request.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">Console Model</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Tell us whether you have a PS5, Xbox, Nintendo Switch or
                  another gaming console.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">Condition</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Describe the physical condition and whether the console
                  powers on and functions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">Accessories</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Mention controllers, cables, original packaging and other
                  included accessories.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg">Your Location</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Let us know your Toronto or GTA location so pickup can be
                  discussed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONDITION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Condition <span className="text-green-600">Standards</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Before completing a gaming console sale, the device is inspected
              and verified. Providing accurate information about its condition
              helps us evaluate your quote request.
            </p>

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

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Get a Quote",
                desc: "Submit your gaming console details so our team can review your device.",
              },
              {
                title: "Free GTA Pickup",
                desc: "We provide convenient pickup across Toronto and the GTA.",
              },
              {
                title: "Get Paid",
                desc: "Get paid once your console has been inspected and verified.",
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
            Sell Gaming Consoles Across Toronto &{" "}
            <span className="text-green-600">GTA</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Road2Resell serves customers looking to sell gaming consoles across
            Toronto and surrounding GTA communities.
          </p>

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
                a: "Road2Resell buys supported PS5 consoles with pickup available across Toronto and the GTA. Submit your PS5 model, condition and accessories through the quote form.",
              },
              {
                q: "How much can I get for my gaming console in Toronto?",
                a: "The value depends on the console model, condition, accessories and other relevant details. Submit the quote form with your device information for an assessment.",
              },
              {
                q: "Do you buy Nintendo Switch consoles?",
                a: "Yes. Road2Resell accepts supported Nintendo Switch, OLED and Lite models for quote requests.",
              },
              {
                q: "Do you buy Xbox consoles?",
                a: "Yes. Supported Xbox consoles including Series X, Series S and Xbox One can be submitted for evaluation.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is made once your console has been inspected and verified and the transaction is confirmed.",
              },
              {
                q: "Do I need to visit a store?",
                a: "No. Road2Resell provides convenient pickup options across Toronto and the GTA.",
              },
              {
                q: "Do you buy broken gaming consoles?",
                a: "We may purchase consoles with certain issues. Submit the quote form or contact us with the console details for a custom assessment.",
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

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black">
              Ready to Sell Your Gaming Console?
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Get started by submitting your PS5, Xbox, Nintendo Switch or
              other gaming console details.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                Call Road2Resell
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GamingConsoles;