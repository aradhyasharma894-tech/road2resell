import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";


const devices = [
  { name: "Sell Phones for Cash", image: "/images/phones.jpg", path: "/phones" },
  { name: "Sell Laptops for Cash", image: "/images/laptops.jpg", path: "/laptops" },
  { name: "Sell Tablets for Cash", image: "/images/tablets.jpg", path: "/tablets" },
  { name: "Sell Gaming Consoles for Cash", image: "/images/gaming.jpg", path: "/gaming-consoles" },
  { name: "Sell Cameras for Cash", image: "/images/cameras.jpg", path: "/cameras" },
  { name: "Sell Drones for Cash", image: "/images/drones.jpg", path: "/drones" },
  { name: "Sell Smart Watches for Cash", image: "/images/watches.jpg", path: "/smart-watches" },
  { name: "Sell Headphones for Cash", image: "/images/headphones.jpg", path: "/headphones" },
  { name: "Sell Other Devices for Cash", image: "/images/others.jpg", path: "/other-devices" },
];

const AcceptedDevices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Accepted Devices
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Select your device category below and get an instant quote with
          Road2Resell. We accept a wide range of electronics.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {devices.map((device, index) => (
            <div
              key={index}
              onClick={() => navigate(device.path)}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Text */}
              <div className="bg-white py-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  {device.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
     <Footer />

    </div>
  );
};

export default AcceptedDevices;