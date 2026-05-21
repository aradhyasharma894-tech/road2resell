import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Cameras = () => {
  const scrollToForm = () => {
    const element = document.getElementById("quote-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Sell Cameras & Lenses for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell DSLR cameras, mirrorless cameras, camera lenses and photography gear for top cash in Toronto & GTA. Free pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell camera Toronto, sell DSLR Toronto, sell mirrorless camera GTA, camera buyer Toronto, sell camera lenses Toronto"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/cameras"
        />

        <meta
          property="og:title"
          content="Sell Cameras & Lenses for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for DSLR cameras, mirrorless cameras, lenses and photography gear with free pickup across Toronto & GTA."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://road2resell.ca/cameras"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <Header />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black leading-tight text-black">
              Sell Digital Cameras & Lenses <br />
              for <span className="text-green-600">Top Cash</span> in{" "}
              <span className="text-green-600">Toronto</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Turn your camera gear and lenses into instant cash. We buy{" "}
              <strong>
                DSLR cameras, mirrorless cameras, compact digital cameras and
                camera lenses.
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
            loading="lazy"
            alt="Sell DSLR and mirrorless cameras for cash in Toronto GTA"
            className="rounded-xl w-full object-cover"
          />
        </section>

        {/* CAMERA GEAR */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-12">
              Camera Gear We <span className="text-green-600">Accept</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/dslr.jpg"
                  loading="lazy"
                  alt="Sell DSLR cameras Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell DSLR Cameras
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell Canon and Nikon DSLR cameras for top cash in Toronto GTA.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/mc.jpg"
                  loading="lazy"
                  alt="Sell mirrorless cameras Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Mirrorless Cameras
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy Sony, Canon, Fujifilm and Nikon mirrorless cameras.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/pc.jpg"
                  loading="lazy"
                  alt="Sell compact digital cameras Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Compact Cameras
                </h3>

                <p className="text-gray-600 text-sm">
                  Sell compact digital cameras including Coolpix, PowerShot,
                  FinePix and Cyber-shot models.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-left">
                <img
                  src="/images/lg.jpg"
                  loading="lazy"
                  alt="Sell camera lenses Toronto"
                  className="rounded mb-4 w-full h-40 object-cover"
                />

                <h3 className="font-bold text-lg mb-2">
                  Sell Lenses & Gear
                </h3>

                <p className="text-gray-600 text-sm">
                  We buy camera lenses, drones, gimbals and photography gear for
                  top cash.
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
              <li>✔ No major physical damage</li>
              <li>✔ No fungus or internal moisture damage</li>
              <li>✔ Lens optics should be clean and functional</li>
            </ul>
          </div>

          <img
            src="/images/dslr2.jpg"
            loading="lazy"
            alt="Sell camera gear in Toronto GTA"
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
                desc: "Submit photos and specifications for your camera gear and lenses.",
              },
              {
                title: "Get a Free Quote",
                desc: "Receive a competitive quote based on current market value.",
              },
              {
                title: "Free GTA Pickup",
                desc: "We provide free pickup across Toronto and GTA.",
              },
              {
                title: "Instant Cash",
                desc: "Get paid instantly once your camera gear is verified.",
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

        {/* RELATED DEVICES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-black text-center mb-10">
              Related <span className="text-green-600">Devices</span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

              {[
                {
                  name: "Sell Drones",
                  path: "/drones",
                },

                {
                  name: "Sell Phones",
                  path: "/phones",
                },

                {
                  name: "Sell Laptops",
                  path: "/laptops",
                },

                {
                  name: "Sell Tablets",
                  path: "/tablets",
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
              Camera & Lens FAQs in Toronto &{" "}
              <span className="text-green-600">GTA</span>
            </h2>

            {[
              {
                q: "Where can I sell my DSLR camera for cash in Toronto?",
                a: "Road2Resell buys DSLR cameras, mirrorless cameras and lenses with free pickup across Toronto GTA.",
              },
              {
                q: "Do you buy camera lenses?",
                a: "Yes. We buy camera lenses, photography gear, drones and gimbals for cash.",
              },
              {
                q: "How fast do I get paid?",
                a: "Payment is instant once your camera gear is verified.",
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

export default Cameras;