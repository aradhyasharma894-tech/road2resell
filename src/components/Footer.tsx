const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold mb-6">
              Sell <span className="text-green-600">Smart</span>. Earn{" "}
              <span className="text-green-600">More</span>.
            </h2>

            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=61587572108666&mibextid=wwXIfr"
                target="_blank"
              >
                <img
                  src="/images/facebook.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.instagram.com/road2reselltoronto"
                target="_blank"
              >
                <img
                  src="/images/instagram.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.ebay.ca/str/road2resellelectronics"
                target="_blank"
              >
                <img
                  src="/images/ebay.png"
                  className="w-5 h-5 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right space-y-3 text-gray-700">
            <p>
              <a
                href="mailto:road2reselltoronto@gmail.com"
                className="underline hover:text-green-600"
              >
                road2reselltoronto@gmail.com
              </a>
            </p>

            <p>
              Call Us:{" "}
              <a
                href="tel:+19426603737"
                className="underline hover:text-green-600"
              >
                +1 (942) 660-3737
              </a>
            </p>

            <p>
              Toronto GTA – Electronics <br />
              <span className="underline">Pickup Available</span>
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center mt-10 text-sm text-gray-600">
          © 2025 Road2Resell. All Rights Reserved. Sell iPhones, iPad, laptop,
          MacBook, digital camera, camera lenses, video game console, video
          games, smartwatch and other electronics in Toronto GTA for top cash.
        </div>
      </div>
    </footer>
  );
};

export default Footer;