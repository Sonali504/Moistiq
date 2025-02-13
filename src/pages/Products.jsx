import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-banner.jpg";
import ProductCard from "../components/ProductCard";

// Import product images
import redRose from "../assets/images/red-rose.jpg";
import pinkBlossom from "../assets/images/pink-blossom.jpg";
import nudeElegance from "../assets/images/nude-elegance.jpg";
import sundownBrown from "../assets/images/sundown-brown.jpg";
import nudyPink from "../assets/images/nudy-pink.jpg";
import musicRose from "../assets/images/music-rose.jpg";
import iceBrown from "../assets/images/ice-brown.jpg";
import mehroonRed from "../assets/images/mahroon-red.jpg";
import fuchsia from "../assets/images/fuchsia.jpg";
import bloodyRed from "../assets/images/bloody-red.jpg";
import violet from "../assets/images/violet.jpg";
import red from "../assets/images/red.jpg";
import blood from "../assets/images/blood.jpg";
import brown from "../assets/images/brown.jpg";
import duskyNude from "../assets/images/dusky-nude.jpg";
import pink from "../assets/images/pink.jpg";

// Product Data
const productsData = [
  { id: 1, name: "Red Rose", price: 19.99, image: redRose, rating: 5 },
  { id: 2, name: "Pink Blossom", price: 10.23, image: pinkBlossom, rating: 4 },
  { id: 3, name: "Nude Elegance", price: 25, image: nudeElegance, rating: 3 },
  { id: 4, name: "Sundown Brown", price: 35, image: sundownBrown, rating: 4 },
  { id: 5, name: "Nudy Pink", price: 39.99, image: nudyPink, rating: 4 },
  { id: 6, name: "Music Rose", price: 30, image: musicRose, rating: 5 },
  { id: 7, name: "Ice Brown", price: 35, image: iceBrown, rating: 3 },
  { id: 8, name: "Mehroon Red", price: 20.99, image: mehroonRed, rating: 4 },
  { id: 9, name: "Fuchsia", price: 29.99, image: fuchsia, rating: 5 },
  { id: 10, name: "Brown Red", price: 25.22, image: bloodyRed, rating: 4 },
  { id: 11, name: "VelBurry Violet", price: 23.22, image: violet, rating: 4 },
  { id: 12, name: "Reddisy Red", price: 37.22, image: red, rating: 3.5 },
  { id: 13, name: "Blood Red", price: 30.99, image: blood, rating: 4 },
  { id: 14, name: "Brown Red", price: 35.99, image: brown, rating: 3 },
  { id: 15, name: "Dusky Nude", price: 40.99, image: duskyNude, rating: 4 },
  { id: 16, name: "Pinkish Pink", price: 45.99, image: pink, rating: 4.5 },
];

const Products = () => {
  return (
    <div className="p-10">
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold italic">
            "Lipstick is the exclamation point of every woman’s beauty!"
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-20">
        <h1 className="text-4xl font-extrabold text-center mb-12 uppercase">
          Collections
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="h-[550px] flex flex-col items-center">
              {/* Product Image with Link */}
              <Link to={`/productdetail/${product.id}`} className="w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                />
              </Link>

              {/* Product Card */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
