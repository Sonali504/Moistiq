import { FaMagic, FaShippingFast, FaGift, FaRecycle, FaRegSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      icon: <FaMagic className="text-pink-500 text-5xl" />,
      title: "Virtual Try-On",
      description: "Try different lipstick shades using our AI-powered virtual try-on feature.",
    },
    {
      id: 2,
      icon: <FaGift className="text-pink-500 text-5xl" />,
      title: "Custom Lipstick Creation",
      description: "Mix & match colors to create your own unique lipstick shade.",
    },
    {
      id: 3,
      icon: <FaShippingFast className="text-pink-500 text-5xl" />,
      title: "Fast & Luxury Shipping",
      description: "Enjoy express delivery with luxury packaging options.",
    },
    {
      id: 4,
      icon: <FaRecycle className="text-pink-500 text-5xl" />,
      title: "Lipstick Recycling Program",
      description: "Return empty containers & get discounts on your next purchase.",
    },
    {
      id: 5,
      icon: <FaRegSmile className="text-pink-500 text-5xl" />,
      title: "Personalized Consultation",
      description: "Get AI-based shade recommendations or book a session with our experts.",
    },
    {
      id: 6,
      icon: <FaRegSmile className="text-pink-500 text-5xl" />,
      title: "Exclusive Membership",
      description: "Join our VIP club for early access to new collections and discounts.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 uppercase">Our Services</h1>

      {/* Adjusting Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center h-64"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
