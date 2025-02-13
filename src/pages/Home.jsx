import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Products from "./Products";

const images = [
  "/images/customer-1.jpg",
  "/images/customer-2.jpg",
  "/images/customer-3.jpg",
  "/images/customer-4.jpg",
  "/images/customer-5.jpg",
];

const products = [
  { id: 1, name: "Pink-Blossom", price: "$10.23", image: "/images/pink-blossom.jpg" },
  { id: 2, name: "Nude Elegance", price: "$25", image: "/images/nude-elegance.jpg" },
  { id: 3, name: "Red-Rose", price: "$19.99", image: "/images/red-rose.jpg", discount: "20% Off" },
  { id: 4, name: "Mehroon-Rd", price: "$20.99", image: "/images/mahroon-red.jpg", discount: "20% Off" },
  { id: 5, name: "Music-Rose", price: "$30", image: "/images/music-rose.jpg" },
  { id: 6, name: "Icy-Brown", price: "$35", image: "/images/ice-brown.jpg" },
  { id: 7, name: "Fuchsia Pink", price: "$29.99", image: "/images/fuchsia.jpg", discount: "20% Off" },
  { id: 8, name: "Nudy Pink", price: "$30.99", image: "/images/nudy-pink.jpg", discount: "20% Off" },
  { id: 9, name: "Sundown Brown", price: "$35", image: "/images/sundown-brown.jpg" },
];

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 py-20s items-center justify-center overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src="/images/hero-section.jpg"
            alt="Hero Image"
            className="rounded-4xl object-cover w-full md:w-5/6 h-[650px]"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4">
            <h1 className="text-4xl font-extrabold">
              Elevate Your Beauty{" "}
              <span className="text-red-600 italic font-extrabold uppercase text-4xl">
                with Perfect Shades
              </span>
            </h1>
            <p className="text-xs italic mt-4">
              Discover luxurious, long-lasting lipsticks that complement your unique style.
              Hydrating, bold, and perfect for every occasion.
            </p>
            <div className="flex items-center space-x-2 justify-center mt-4">
              <Link to="/products">
                <button className="bg-pink-600 text-white px-5 py-3 rounded-xl hover:bg-pink-700 transition">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* {Products} */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-black mb-8 text-center italic">
            Available Products
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            pagination={{ clickable: true }}
            loop
            >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="max-w-[384px] mx-auto">
                  <div className="w-full max-w-sm aspect-square relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                    {product.discount && (
                      <span className="py-1 px-3 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-medium absolute top-3 right-3">
                        {product.discount}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h6 className="font-medium text-xl text-black mb-2">{product.name}</h6>
                      <h6 className="font-semibold text-xl text-indigo-600">{product.price}</h6>
                    </div>
                    <Link to={`/productdetail/${product.id}`}>
                      <button className="bg-pink-600 text-lg font-bold text-white px-5 py-2 rounded-xl hover:bg-pink-700 transition">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center space-x-2 justify-center mt-4">
              <Link to="/products">
                <button className="bg-pink-600 text-white px-5 py-3 rounded-xl hover:bg-pink-700 transition">
                  Explore Now
                </button>
              </Link>
            </div>
        </div>
      </section>

      {/* {Standard} */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h5 className="text-pink-600 font-bold uppercase tracking-widest mb-3">
              Our Standards
            </h5>
            <h2 className="text-4xl sm:text-5xl font-serif italic font-semibold text-black leading-tight mb-6">
              We put an enormous amount of love & care into making our products
            </h2>
            <h6 className="text-black font-bold text-sm uppercase mb-3">
              Our Products Are
            </h6>
            <ul className="text-black font-medium flex flex-wrap justify-center lg:justify-start gap-4 text-lg">
              <li className="flex items-center">
                <span className="text-pink-600 text-xl mr-2">•</span> Cruelty-Free
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 text-xl mr-2">•</span> Vegan
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 text-xl mr-2">•</span> Paraben-Free
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 text-xl mr-2">•</span> Gluten-Free
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 text-xl mr-2">•</span> Talc-Free
              </li>
            </ul>
          </div>

          {/* Right Images - No Overlap */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/images/stan.jpg"
              alt="Smiling Model"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
            <img
              src="/images/stan-2.jpg"
              alt="Lipstick Colors"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        </div>
      </section>

      {/* {wHY_US} */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section - 60% */}
            <div className="w-full lg:w-3/5">
              <img
                src="/images/why-1.jpg"
                alt="Why Choose Us"
                className="w-full h-[700px] rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section - 40% */}
            <div className="w-full lg:w-2/5 mt-6 lg:mt-0 lg:pl-12">
              <h2 className="text-6xl font-extrabold uppercase text-gray-900">Why-MoiStiq?</h2>
              <p className="mt-4 text-gray-600">
                We provide high-quality, organic beauty products crafted with natural
                ingredients. Our commitment is to enhance your beauty with sustainable 
                and cruelty-free solutions.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  💄 <span className="ml-3 text-gray-700">100% Natural Ingredients</span>
                </li>
                <li className="flex items-center">
                  💄 <span className="ml-3 text-gray-700">Cruelty-Free Products</span>
                </li>
                <li className="flex items-center">
                  💄 <span className="ml-3 text-gray-700">Dermatologically Tested</span>
                </li>
                <li className="flex items-center">
                💄 <span className="ml-3 text-gray-700">Eco-Friendly Packaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* {New-Collection} */}
      <section className="flex flex-col md:flex-row items-center bg-[#E0115F] text-white">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
              src="/images/why.jpg"
              alt="Gimme a Bite Collection"
              className="w-full object-cover"
            />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-10 text-center">
          <p className="text-sm uppercase tracking-wide">NEW SHADES</p>
          <h2 className="text-5xl font-bold mt-2">GIMME A BITE COLLECTION</h2>
          <p className="font-serif italic text-3xl mt-4">
            We added <strong>7 reimagined shades</strong> to this nostalgic
            lineup—available in <strong>Lipstick, Butter Balm & Gloss.</strong>
          </p>
          {/* CTA Button */}
          <a href="/products" className="mt-6 px-6 py-3 bg-white text-[#702F2F] font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            SHOP THE COLLECTION
          </a>
        </div>
      </section>

      {/* {Store} */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gray-100 mt-20">
        {/* Left Side: Store List */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h5 className="text-red-600 font-bold uppercase tracking-widest mb-3">
            Our Stores <span className="text-gray-600">(17)</span>
          </h5>
          <ul className="text-black text-5xl sm:text-4xl font-serif space-y-2">
            <li className="italic">Boston Seaport <sup className="text-xs text-gray-500">NEW!</sup></li>
            <li className="italic">Upper East Side <sup className="text-xs text-gray-500">NEW!</sup></li>
            <li className="flex items-center font-bold uppercase">
              <span className="text-pink-600 text-3xl mr-3">•</span> Toronto Distillery
              <sup className="text-xs text-gray-500 ml-2">NEW!</sup>
            </li>
            <li className="italic ">Napa</li>
            <li className="italic">Austin</li>
            <li className="italic">Knox Henderson</li>
            <li className="italic">The Wharf</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full uppercase">
            View All Stores
          </button>
        </div>

        {/* Right Side: Image with Details */}
        <div className="lg:w-1/2 flex flex-col items-center mt-12 lg:mt-0">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <img
              src="/images/shop.jpg"
              alt="Toronto Distillery"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-6 italic text-gray-700 text-lg">Toronto Distillery</p>
          <p className="text-gray-600">18 Gristmill Lane, Toronto</p>
          <p className="text-gray-600">10AM-8PM</p>
          <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full uppercase">
            View Store
          </button>
        </div>
      </section>

      {/* {Gift} */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-20">
        {/* Left Section - Text & Button */}
        <div className="relative flex items-center justify-center bg-cover bg-center text-white p-8 h-[500px]" 
            style={{ backgroundImage: `url('../images/gift-bg.jpg')` }}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif italic">
              The best gifts aren't found, they're made
            </h2>
            <p className="mt-2 text-lg">Gift a Lip Lab experience at any location or virtually</p>
            <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-100 transition">
              GIVE GIFT CARD
            </button>
          </div>
        </div>

        {/* Right Section - Lipstick Image */}
        <section>
              <img src="/images/gift-bg1.jpg" alt="Lipsticks" className="w-full h-[500px] object-cover"/>
          </section>
      </section>
      
      {/* {image-Slider} */}
      <section className="w-full bg-gray-100 py-8 mt-20">
        <h2 className="text-center text-3xl italic font-serif mb-6 pt-10">
          Get in on the experience <span className="font-bold">@MoiStiq</span>
        </h2>

        <div className="relative w-11/12 mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            className="w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button to Instagram */}
          <div className="flex justify-center mt-6">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition"
            >
              @MoiStiq
            </a>
          </div>
        </div>
      </section>

      
      

      

      
      
    </div>
  );
};

export default Home;
