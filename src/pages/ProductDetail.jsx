import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/product-detail";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <h2 className="text-center">Product not found</h2>;

  // Handle Add to Cart
  const handleAddToCart = () => {
    navigate(`/cart`, { state: { product } });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section: Product Image */}
      <div className="md:w-3/2">
            <div>
            <img
                src={product.image}
                alt={product.name}
                className="w-[700px] h-[500px] object-contain rounded-2xl"
            />
            </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="md:w-1/2 pt-5">
        {product.discount && (
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold">
            Save {product.discount}
          </span>
        )}

        <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          {Array(Math.round(product.rating))
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          <span className="text-gray-600 text-sm">({Math.floor(Math.random() * 1000)} Reviews)</span>
        </div>

        <p className="mt-4 text-gray-700 text-lg">{product.description}</p>

        <div className="mt-4">
          <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
          <div className="mt-4 flex items-center gap-2">
                <p className="text-gray-600 text-sm">Flexible payments available via</p>
                <FaPaypal className="text-blue-600 text-2xl" />
                <FaCcVisa className="text-indigo-600 text-2xl" />
                <FaCcMastercard className="text-red-600 text-2xl" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-4">
          <button
            className="border border-gray-400 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
            🛒 Buy Now
          </button>
        </div>

        <ul className="mt-6 text-sm text-gray-600 list-disc pl-5">
          <li>Due to high demand, limit of 1 per order.</li>
          <li>Only 1 lipstick included.</li>
          <li>Shipped separately with secure packaging.</li>
          <li>Signature required on delivery.</li>
        </ul>

        <div className="mt-6">
          <Link to="/products" className="text-pink-600 font-semibold hover:underline">
            Back to all products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
