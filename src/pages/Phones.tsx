import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Phones = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const phoneFaqs = [
    {
      q: "Where can I sell my iPhone for cash in Toronto?",
      a: "Road2Resell buys iPhones for cash in Toronto and across the GTA. Submit your iPhone model, storage, condition and other details through our quote form to get started.",
    },
    {
      q: "Can I sell my used iPhone in Toronto?",
      a: "Yes. Road2Resell buys eligible used iPhones in Toronto and the GTA. The model, storage capacity, condition and functionality can affect the offer.",
    },
    {
      q: "Where can I sell my Samsung phone for cash in Toronto?",
      a: "Road2Resell buys Samsung smartphones in Toronto and surrounding GTA locations. Provide the exact model and condition when requesting a quote.",
    },
    {
      q: "Can I sell my Google Pixel for cash?",
      a: "Yes. Road2Resell buys Google Pixel smartphones. Include the model, storage capacity and condition when submitting your device details.",
    },
    {
      q: "Which phones do you buy?",
      a: "We buy iPhone, Samsung, Google Pixel, Motorola and other major smartphone brands. Eligibility depends on the device and its condition.",
    },
    {
      q: "What affects the value of my phone?",
      a: "The phone model, generation, storage capacity, physical condition, screen condition, battery condition, functionality and activation or account locks can affect the offer.",
    },
    {
      q: "How quickly can I get paid for my phone?",
      a: "After collection and inspection, payment can be made in cash or by e-transfer according to the agreed transaction.",
    },
    {
      q: "Do you offer phone pickup in the GTA?",
      a: "Road2Resell provides doorstep service across supported Toronto and GTA locations. Submit your details to check availability for your area.",
    },
  ];

  const faqSchema = phoneFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));

  return (
    <>
      <Helmet>
        <title>
          Sell iPhone, Samsung & Phones for Cash in Toronto | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell iPhone, Samsung, Google Pixel and used smartphones for cash in Toronto & GTA. Get a quote, doorstep pickup and fast payment from Road2Resell."
        />

        <meta
          name="keywords"
          content="sell iPhone Toronto, sell iPhone for cash Toronto, sell used iPhone Toronto, iPhone buyer Toronto, sell Samsung Toronto, sell Samsung for cash Toronto, Samsung buyer Toronto, sell Google Pixel Toronto, sell smartphone Toronto, sell phone for cash Toronto, used phone buyer Toronto, smartphone buyer Toronto, cash for phones Toronto"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/phones"
        />

        <meta
          property="og:title"
          content="Sell iPhone, Samsung & Phones for Cash in Toronto | Road2Resell"
        />

        <meta
          property="og:description"
          content="Sell iPhone, Samsung, Google Pixel and other smartphones for cash in Toronto & GTA. Get a quote and doorstep service from Road2Resell."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://road2resell.ca/phones"
        />

        <meta
          property="og:image"
          content="https://road2resell.ca/images/phones.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://road2resell.ca/phones",
                url: "https://road2resell.ca/phones",
                name: "Sell iPhone, Samsung & Phones for Cash in Toronto",
                description:
                  "Sell iPhone, Samsung, Google Pixel and other smartphones for cash in Toronto and the GTA.",
                inLanguage: "en-CA",
                isPartOf: {
                  "@type": "WebSite",
                  name: "Road2Resell",
                  url: "https://road2resell.ca/",
                },
              },
              {
                "@type": "LocalBusiness",
                name: "Road2Resell",
                url: "https://road2resell.ca/",
                email: "road2reselltoronto@gmail.com",
                areaServed: [
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
                ],
                description:
                  "Road2Resell buys iPhones, Samsung phones, Google Pixel smartphones and other electronics for cash across Toronto and the GTA.",
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
                    name: "Phones",
                    item: "https://road2resell.ca/phones",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqSchema,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 font-bold uppercase tracking-wide mb-4">
              Toronto & GTA Smartphone Buyer
            </p>

            <h1 className="text-5xl sm:text-6xl font-black leading-tight text-black">
              Sell iPhone, Samsung &{" "}
              <span className="text-green-600">Phones for Cash</span> in
              Toronto & GTA
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Looking to <strong>sell your iPhone in Toronto</strong>? Road2Resell
              buys iPhone, Samsung, Google Pixel, Motorola and other smartphones
              for cash across Toronto and the GTA.
            </p>

            <p className="mt-4 text-gray-600">
              Tell us your phone model, storage capacity and condition, get a
              quote, and avoid the hassle of visiting a store. We provide
              doorstep service across supported GTA locations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToForm}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Get a Phone Quote
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
            alt="Sell iPhone, Samsung and smartphones for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* BRANDS */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-600 font-bold uppercase tracking-wide">
                Smartphones We Buy
              </p>

              <h2 className="text-4xl font-black mt-2">
                Sell Your <span className="text-green-600">Phone for Cash</span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We buy smartphones from major manufacturers. Include your exact
                model and condition when requesting a quote.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "iPhone",
                  img: "/images/apple.png",
                  title: "Sell iPhone in Toronto",
                  desc: "Sell eligible used iPhone models for cash. Include the model, storage and condition for a more accurate quote.",
                },
                {
                  name: "Samsung",
                  img: "/images/samsung.png",
                  title: "Sell Samsung in Toronto",
                  desc: "We buy Samsung Galaxy and other eligible Samsung smartphones across Toronto and the GTA.",
                },
                {
                  name: "Google Pixel",
                  img: "/images/google.png",
                  title: "Sell Google Pixel in Toronto",
                  desc: "Get a quote for your Google Pixel smartphone by providing its model, storage and condition.",
                },
                {
                  name: "Motorola",
                  img: "/images/motorola.png",
                  title: "Sell Motorola in Toronto",
                  desc: "We also buy eligible Motorola smartphones and other major phone brands.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-xl shadow-sm"
                >
                  <img
                    src={item.img}
                    loading="lazy"
                    alt={item.title}
                    className="h-16 mx-auto mb-5 object-contain"
                  />

                  <h3 className="font-bold text-lg text-center mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IPHONE SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border rounded-xl p-8">
                <h2 className="text-3xl font-black mb-4">
                  Sell iPhone for Cash in Toronto
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  If you want to{" "}
                  <strong>sell a used iPhone in Toronto</strong>, submit the
                  exact iPhone model, storage capacity and condition. Screen
                  condition, battery condition, functionality and account locks
                  may affect the evaluation.
                </p>

                <ul className="mt-6 text-sm text-gray-600 space-y-2">
                  <li>✓ Used iPhones</li>
                  <li>✓ Different storage capacities</li>
                  <li>✓ Various iPhone generations</li>
                  <li>✓ Working devices in eligible condition</li>
                </ul>
              </div>

              <div className="border rounded-xl p-8">
                <h2 className="text-3xl font-black mb-4">
                  Sell Samsung for Cash in Toronto
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Have a Samsung smartphone you no longer need? Road2Resell
                  buys eligible Samsung devices across Toronto and the GTA.
                  Provide the exact model, storage and condition when requesting
                  a quote.
                </p>

                <ul className="mt-6 text-sm text-gray-600 space-y-2">
                  <li>✓ Samsung Galaxy smartphones</li>
                  <li>✓ Different storage configurations</li>
                  <li>✓ Used Samsung devices</li>
                  <li>✓ Eligible working devices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black">
              Get a Quote for Your{" "}
              <span className="text-green-600">Phone</span>
            </h2>

            <p className="text-gray-600 mt-4">
              Tell us what phone you're selling and provide the device details
              for evaluation.
            </p>
          </div>

          <QuoteFormSection />
        </div>

        {/* WHAT AFFECTS PHONE VALUE */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black">
                What We Consider When Evaluating Your{" "}
                <span className="text-green-600">Phone</span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Complete phone information helps us evaluate the device and
                prepare an appropriate offer.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Phone Model",
                  desc: "The exact manufacturer, model and generation of your smartphone.",
                },
                {
                  title: "Storage",
                  desc: "Internal storage capacity such as 64GB, 128GB, 256GB or higher.",
                },
                {
                  title: "Condition",
                  desc: "Screen, body, cameras, buttons and overall physical condition.",
                },
                {
                  title: "Functionality",
                  desc: "Power, charging, connectivity and general operation of the device.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-xl shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALIFICATION */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Phone Selling{" "}
              <span className="text-green-600">Requirements</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Before selling your smartphone, make sure the device is ready
              for evaluation and transfer.
            </p>

            <ul className="space-y-4 text-gray-800 font-medium">
              <li>✔ Good physical condition</li>
              <li>✔ Powers on and is functional</li>
              <li>✔ No activation or iCloud lock</li>
              <li>✔ Device must not be stolen or blacklisted</li>
              <li>✔ Remove personal accounts before transfer</li>
            </ul>
          </div>

          <img
            src="/images/person.jpg"
            loading="lazy"
            alt="Sell used smartphones for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-100 py-20 text-center">
          <h2 className="text-4xl font-black mb-16">
            How to{" "}
            <span className="text-green-600">
              Sell Your Phone for Cash
            </span>
          </h2>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Send Phone Details",
                desc: "Tell us your phone model, storage and condition through our quote form or by phone.",
              },
              {
                title: "Receive an Offer",
                desc: "We review the information you provide and prepare a cash offer.",
              },
              {
                title: "Doorstep Pickup",
                desc: "No store visit required. We come to you across supported GTA locations.",
              },
              {
                title: "Get Paid",
                desc: "Payment is made after collection and inspection according to the agreed transaction.",
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
            Sell Phones Across{" "}
            <span className="text-green-600">Toronto & GTA</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Road2Resell provides smartphone buying and doorstep service across
            Toronto and surrounding GTA communities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto text-gray-800 font-medium">
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
              <div
                key={i}
                className="border rounded-lg px-4 py-3"
              >
                Sell Phone in {city}
              </div>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="mt-10 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get My Phone Quote
          </button>
        </section>

        {/* RELATED DEVICES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-black text-center mb-10">
              Sell Other{" "}
              <span className="text-green-600">Devices</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Sell Laptops",
                  path: "/laptops",
                },
                {
                  name: "Sell Gaming Consoles",
                  path: "/gaming-consoles",
                },
                {
                  name: "Sell Tablets",
                  path: "/tablets",
                },
                {
                  name: "Sell Smartwatches",
                  path: "/smart-watches",
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

            {phoneFaqs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl mb-4 shadow-sm"
              >
                <h3 className="font-bold mb-2">
                  {item.q}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-black text-white text-center px-6">
          <h2 className="text-4xl font-black">
            Ready to Sell Your iPhone or Smartphone?
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Get started with Road2Resell and submit your phone details for a
            quote in Toronto and the GTA.
          </p>

          <button
            onClick={scrollToForm}
            className="mt-8 bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Get a Phone Quote
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Phones;