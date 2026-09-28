import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Laptops = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const laptopFaqs = [
    {
      q: "Where can I sell my MacBook for cash in Toronto?",
      a: "Road2Resell buys MacBook Air, MacBook Pro and other MacBook models for cash in Toronto and across the GTA. Submit your device details through our quote form to get started.",
    },
    {
      q: "Can I sell my MacBook Air or MacBook Pro?",
      a: "Yes. Road2Resell buys MacBook Air and MacBook Pro models. Include the model, year, chip, RAM, storage and condition when requesting a quote.",
    },
    {
      q: "Where can I sell a used MacBook in Toronto?",
      a: "You can sell your used MacBook through Road2Resell without visiting a store. We provide doorstep service across Toronto and GTA locations.",
    },
    {
      q: "Can I sell my gaming PC for cash in Toronto?",
      a: "Yes. Road2Resell buys gaming PCs and custom gaming computer setups. Provide the CPU, GPU, RAM, storage and overall condition for an accurate quote.",
    },
    {
      q: "Which laptop brands do you buy?",
      a: "We buy Apple MacBooks as well as laptops from Dell, HP, Lenovo, ASUS, Acer, MSI, Razer and other major brands.",
    },
    {
      q: "How quickly do I get paid for my laptop or MacBook?",
      a: "After the device is collected and inspected, payment can be made in cash or by e-transfer according to the agreed transaction.",
    },
  ];

  const faqSchema = laptopFaqs.map((item) => ({
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
          Sell MacBook, Laptops & Gaming PCs for Cash in Toronto | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell MacBook Air, MacBook Pro, laptops and gaming PCs for cash in Toronto & GTA. We buy Apple, Dell, HP, Lenovo, ASUS, Acer, MSI and more."
        />

        <meta
          name="keywords"
          content="sell MacBook Toronto, sell MacBook for cash Toronto, sell MacBook Air Toronto, sell MacBook Pro Toronto, sell used MacBook Toronto, MacBook buyer Toronto, sell laptop Toronto, sell laptops for cash Toronto, laptop buyer Toronto, sell gaming PC Toronto, sell gaming computer Toronto, gaming PC buyer Toronto, cash for laptops Toronto"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/laptops"
        />

        <meta
          property="og:title"
          content="Sell MacBook, Laptops & Gaming PCs for Cash in Toronto | Road2Resell"
        />

        <meta
          property="og:description"
          content="Sell MacBook Air, MacBook Pro, laptops and gaming PCs for cash in Toronto & GTA. Get a quote and doorstep service from Road2Resell."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://road2resell.ca/laptops"
        />

        <meta
          property="og:image"
          content="https://road2resell.ca/images/macbook.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://road2resell.ca/laptops",
                url: "https://road2resell.ca/laptops",
                name: "Sell MacBook, Laptops & Gaming PCs for Cash in Toronto",
                description:
                  "Sell MacBook Air, MacBook Pro, laptops and gaming PCs for cash in Toronto and GTA.",
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
                  "Road2Resell buys laptops, MacBooks, gaming PCs and other electronics for cash across Toronto and the GTA.",
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
                    name: "Laptops & MacBooks",
                    item: "https://road2resell.ca/laptops",
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
              Toronto & GTA Laptop Buyer
            </p>

            <h1 className="text-6xl font-black leading-tight text-black">
              Sell MacBook, Laptops & Gaming PCs{" "}
              <span className="text-green-600">for Cash</span> in Toronto &
              GTA
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Looking to <strong>sell your MacBook in Toronto</strong>? Road2Resell
              buys <strong>MacBook Air, MacBook Pro, Windows laptops and gaming
              PCs</strong> for cash across Toronto and the GTA. Tell us your
              device model and condition, get a quote, and avoid the hassle of
              visiting a store.
            </p>

            <p className="mt-4 text-gray-600">
              We buy Apple, Dell, HP, Lenovo, ASUS, Acer, MSI, Razer and other
              major laptop brands. We also buy custom{" "}
              <strong>gaming computers and gaming PCs</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToForm}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Get a Laptop Quote
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
            src="/images/macbook.jpg"
            loading="lazy"
            alt="Sell MacBook and laptops for cash in Toronto and GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* DEVICE TYPES */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-600 font-bold uppercase tracking-wide">
                What We Buy
              </p>

              <h2 className="text-4xl font-black mt-2">
                Sell Your <span className="text-green-600">MacBook, Laptop</span>{" "}
                or Gaming PC
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Get a quote for your used laptop, MacBook or gaming computer.
                Providing accurate specifications helps us assess your device
                and prepare an offer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* MACBOOK */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <img
                  src="/images/apple.png"
                  loading="lazy"
                  alt="Sell MacBook Air and MacBook Pro in Toronto"
                  className="h-16 mx-auto mb-5 object-contain"
                />

                <h3 className="font-bold text-xl mb-3 text-center">
                  Sell MacBook Air & MacBook Pro
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Sell your{" "}
                  <strong>MacBook Air or MacBook Pro</strong> for cash in
                  Toronto. Include the model year, Apple chip or processor,
                  RAM, storage and condition when requesting a quote.
                </p>

                <ul className="mt-5 text-sm text-gray-600 space-y-2">
                  <li>✓ MacBook Air</li>
                  <li>✓ MacBook Pro</li>
                  <li>✓ Apple Silicon & Intel models</li>
                  <li>✓ Different RAM & storage configurations</li>
                </ul>
              </div>

              {/* LAPTOPS */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <img
                  src="/images/laptop1.png"
                  loading="lazy"
                  alt="Sell used laptops for cash in Toronto"
                  className="h-16 mx-auto mb-5 object-contain"
                />

                <h3 className="font-bold text-xl mb-3 text-center">
                  Sell Used Laptops
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We buy laptops from{" "}
                  <strong>Dell, HP, Lenovo, ASUS, Acer, MSI, Razer</strong> and
                  other major manufacturers. Business, personal and performance
                  laptops may qualify.
                </p>

                <ul className="mt-5 text-sm text-gray-600 space-y-2">
                  <li>✓ Dell & HP laptops</li>
                  <li>✓ Lenovo & ASUS laptops</li>
                  <li>✓ Acer & MSI laptops</li>
                  <li>✓ Razer and other brands</li>
                </ul>
              </div>

              {/* GAMING PC */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <img
                  src="/images/gc.png"
                  loading="lazy"
                  alt="Sell gaming PC for cash in Toronto"
                  className="h-16 mx-auto mb-5 object-contain"
                />

                <h3 className="font-bold text-xl mb-3 text-center">
                  Sell Gaming PCs
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Selling a{" "}
                  <strong>gaming PC or custom gaming computer</strong>? Tell
                  us the CPU, graphics card, RAM, storage and condition so we
                  can evaluate the setup.
                </p>

                <ul className="mt-5 text-sm text-gray-600 space-y-2">
                  <li>✓ Custom gaming PCs</li>
                  <li>✓ Gaming desktops</li>
                  <li>✓ Dedicated graphics cards</li>
                  <li>✓ Performance gaming setups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MACBOOK + GAMING PC SEARCH INTENT */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border rounded-xl p-8">
                <h2 className="text-3xl font-black mb-4">
                  Sell MacBook for Cash in Toronto
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Whether you have a{" "}
                  <strong>MacBook Air, MacBook Pro or another MacBook</strong>,
                  Road2Resell provides a straightforward way to sell your used
                  Apple laptop in Toronto and the GTA. For a faster quote,
                  provide the model, year, processor or Apple chip, RAM,
                  storage and physical condition.
                </p>
              </div>

              <div className="border rounded-xl p-8">
                <h2 className="text-3xl font-black mb-4">
                  Sell Gaming PC for Cash in Toronto
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Have a gaming desktop you no longer need? We buy{" "}
                  <strong>gaming PCs and custom gaming computers</strong>.
                  Include the CPU, GPU, RAM, SSD/HDD storage and overall
                  condition when submitting your quote request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONVERSION CTA */}
        <section className="bg-green-50 border-y border-green-100 py-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-green-700 font-bold uppercase tracking-wide text-sm">
              Ready to sell your laptop?
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-black mt-2">
              Get Your Free Laptop Quote
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Tell us about your MacBook, laptop or gaming PC. Get started
              online or speak with Road2Resell directly.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
              >
                Get a Laptop Quote
              </button>

              <a
                href="tel:+19426603737"
                className="border-2 border-green-600 text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FORM */}
        <div id="quote-form" className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black">
              Get a Quote for Your{" "}
              <span className="text-green-600">Laptop or MacBook</span>
            </h2>

            <p className="text-gray-600 mt-4">
              Tell us what you're selling and we'll review your device details.
            </p>
          </div>

          <QuoteFormSection />
        </div>

        {/* WHAT AFFECTS VALUE */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black">
                What We Consider When Evaluating Your{" "}
                <span className="text-green-600">Device</span>
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Device specifications and condition can affect the offer.
                Providing complete information helps us assess your laptop,
                MacBook or gaming PC.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Model & Year",
                  desc: "The exact laptop, MacBook or gaming PC model and generation.",
                },
                {
                  title: "Processor",
                  desc: "Apple Silicon, Intel, AMD or other processor information.",
                },
                {
                  title: "RAM & Storage",
                  desc: "Memory capacity and SSD or HDD storage configuration.",
                },
                {
                  title: "Condition",
                  desc: "Physical condition, functionality, screen and overall working condition.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-xl shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
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
              Laptop & MacBook{" "}
              <span className="text-green-600">Qualification</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Before selling your device, make sure it is ready for transfer
              and evaluation.
            </p>

            <ul className="space-y-4 text-gray-800 font-medium">
              <li>✔ Good physical condition</li>
              <li>✔ Powers on and is functional</li>
              <li>✔ Remove iCloud, BIOS and firmware locks</li>
              <li>✔ Devices must not be blacklisted or reported</li>
              <li>✔ Include accurate model and specification information</li>
            </ul>
          </div>

          <img
            src="/images/person2.jpg"
            loading="lazy"
            alt="Sell laptops and MacBooks for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-100 py-20 text-center">
          <h2 className="text-4xl font-black mb-16">
            How to{" "}
            <span className="text-green-600">Sell Your Laptop</span>
          </h2>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Send Device Details",
                desc: "Submit your MacBook, laptop or gaming PC model, specifications and condition.",
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
            Sell Laptops & MacBooks Across{" "}
            <span className="text-green-600">Toronto & GTA</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Road2Resell provides laptop, MacBook and gaming PC buying services
            across Toronto and surrounding GTA communities.
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
                Sell Laptop in {city}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="mt-10 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get My Laptop Quote
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
                  name: "Sell Phones",
                  path: "/phones",
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
              MacBook, Laptop & Gaming PC{" "}
              <span className="text-green-600">FAQs</span>
            </h2>

            {laptopFaqs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl mb-4 shadow-sm"
              >
                <h3 className="font-bold mb-2">{item.q}</h3>

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
            Ready to Sell Your MacBook, Laptop or Gaming PC?
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Get started with Road2Resell and submit your device details for a
            quote in Toronto and the GTA.
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="mt-8 bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Get a Quote
          </button>
        </section>

        <Footer />
      </div>

      {/* MOBILE STICKY CONVERSION BAR
          Hidden on sm and larger screens, so desktop/laptop layout is unchanged. */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_15px_rgba(0,0,0,0.10)] p-3 sm:hidden">
        <div className="flex gap-2 max-w-lg mx-auto">
          <button
            type="button"
            onClick={scrollToForm}
            className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
          >
            Get Cash Quote
          </button>

          <a
            href="tel:+19426603737"
            className="flex-1 bg-black hover:bg-gray-800 active:bg-gray-700 text-white font-bold py-3 px-4 rounded-xl text-sm text-center rounded-xl transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Laptops;