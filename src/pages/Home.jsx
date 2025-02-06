import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#f72585] via-[#57cc99] to-[#ffb3c1]">
      {/* Hero Section */}
      <section className="relative  pt-5 pb-7 items-center justify-center overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src="./src/assets/images/hero-section.jpg"
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-extrabold text-3xl min-[400px]:text-4xl text-white mb-8 max-lg:text-center italic">
            Available Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square">
                <img
                  src="./src/assets/images/pink-blossom.jpg"
                  alt="cream image"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Pink-Blossom</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$10.23</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>

            {/* Product 2 */}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square">
                <img
                  src="./src/assets/images/nude-elegance.jpg"
                  alt="cream image"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Nude Elegance</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$25</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>

            {/* Product 3 */}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square relative">
                <img
                  src="./src/assets/images/red-rose.jpg"
                  alt="serum bottle image"
                  className="w-full h-full rounded-xl object-cover"
                />
                <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                  20% Off
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Red-Rose</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$19.99</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
            {/* Product 5*/}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square relative">
                <img
                  src="./src/assets/images/mahroon-red.jpg"
                  alt="serum bottle image"
                  className="w-full h-full rounded-xl object-cover"
                />
                <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                  20% Off
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Mehroon-Rd</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$20.99</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
            {/* Product 4 */}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square">
                <img
                  src="./src/assets/images/music-rose.jpg"
                  alt="cream image"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Music-Rose</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$30</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
            {/* Product 6 */}
            <a href="javascript:;" className="max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square">
                <img
                  src="./src/assets/images/ice-brown.jpg"
                  alt="cream image"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">Icy-Brown</h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">$35</h6>
                </div>
                <button
                  className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
