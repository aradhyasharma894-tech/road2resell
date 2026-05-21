import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TermsSection } from "@/components/TermsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Sell Electronics for Cash in Toronto & GTA | Road2Resell
        </title>

        <meta
          name="description"
          content="Sell phones, laptops, MacBooks, gaming consoles, tablets, cameras, drones, smartwatches, and more for top cash in Toronto & GTA. Free doorstep pickup and instant payment."
        />

        <meta
          name="keywords"
          content="sell electronics Toronto, sell phones Toronto, sell laptops GTA, sell MacBook Toronto, electronics buyer Toronto, cash for electronics GTA"
        />

        <link
          rel="canonical"
          href="https://road2resell.ca/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Sell Electronics for Cash in Toronto & GTA | Road2Resell"
        />

        <meta
          property="og:description"
          content="Get top cash for phones, laptops, gaming consoles, tablets, cameras, drones, and more with free electronics pickup across Toronto & GTA."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://road2resell.ca/"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Road2Resell",
            image: "https://road2resell.ca/logo2.png",
            url: "https://road2resell.ca",
            telephone: "+1-942-660-3737",

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
              "Road2Resell buys electronics for cash in Toronto GTA including iPhones, laptops, tablets, gaming consoles, cameras, drones and more with free pickup.",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Toronto",
              addressRegion: "Ontario",
              addressCountry: "CA",
            },

            sameAs: [
              "https://www.instagram.com/",
              "https://www.facebook.com/",
            ],
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: [
              {
                "@type": "Question",
                name: "Where can I sell my electronics for cash in Toronto?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Road2Resell buys phones, laptops, gaming consoles, tablets, cameras, drones, smartwatches and electronics for top cash across Toronto and GTA.",
                },
              },

              {
                "@type": "Question",
                name: "Do you offer doorstep pickup in Toronto GTA?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Yes. Road2Resell provides free doorstep electronics pickup across Toronto, Brampton, Mississauga, Scarborough, North York, Vaughan and nearby GTA areas.",
                },
              },

              {
                "@type": "Question",
                name: "How fast do I get paid for my electronics?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Most customers receive instant payment during pickup through cash or e-transfer.",
                },
              },

              {
                "@type": "Question",
                name: "What electronics do you buy?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "We buy iPhones, Samsung phones, MacBooks, laptops, gaming consoles, tablets, cameras, drones, smartwatches, headphones and more.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />

        {/* Quote Form */}
        <QuoteFormSection />

        {/* Accepted Devices Section */}
        <div id="devices" className="bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black mb-10">
              Turn Electronics Into{" "}
              <span className="text-green-600">Instant Cash</span>
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

              {[
                { name: "Sell Phones for Cash", image: "/images/phones.jpg", path: "/phones" },
                { name: "Sell Laptops for Cash", image: "/images/laptops.jpg", path: "/laptops" },
                { name: "Sell Tablets & iPads for Cash", image: "/images/tablets.jpg", path: "/tablets" },
                { name: "Sell Gaming Consoles for Cash", image: "/images/gaming.jpg", path: "/gaming-consoles" },
                { name: "Sell Cameras for Cash", image: "/images/cameras.jpg", path: "/cameras" },
                { name: "Sell Drones for Cash", image: "/images/drones.jpg", path: "/drones" },
                { name: "Sell Smart Watches for Cash", image: "/images/watches.jpg", path: "/smart-watches" },
                { name: "Sell Headphones for Cash", image: "/images/headphones.jpg", path: "/headphones" },
                { name: "Sell Other Devices for Cash", image: "/images/others.jpg", path: "/other-devices" },
                { name: "Sell Gaming PC for Cash", image: "/images/laptops.jpg", path: "/gamingpc" },

              ].map((device, index) => (
                <div
                  key={index}
                  onClick={() => (window.location.href = device.path)}
                  className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer bg-white"
                >
                  <div className="overflow-hidden">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="py-5 flex justify-center">
                    <button className="border border-green-600 text-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition">
                      {device.name}
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <HowItWorksSection />

        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
              Sell Your Used Electronics for Cash in{" "}
              <span className="text-green-600">Toronto & GTA</span>
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

              <p>
                Road2Resell is Toronto’s trusted electronics buyer offering fast,
                secure, and hassle-free electronics pickup across the GTA.
              </p>

              <p>
                We buy phones, laptops, MacBooks, gaming consoles, tablets,
                cameras, drones, smartwatches, headphones, gaming PCs and more.
              </p>

              <p>
                Our team provides quick quotes, doorstep pickup and instant
                payment throughout Toronto and the Greater Toronto Area.
              </p>

            </div>
          </div>
        </section>

        <WhyChooseUsSection />

        <TermsSection />

        <ContactSection />
      </div>
    </>
  );
};

export default Index;