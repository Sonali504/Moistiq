import { Link } from "react-router-dom";

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="relative flex items-center justify-between sm:h-15 md:justify-center py-6 px-4 mt-2">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
            <Link to="/" aria-label="Home" className="flex items-center space-x-2">
                <span className="text-2xl font-extrabold px-5 ">MoiStiq</span>
            
            </Link>


          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={toggleMobileMenu}
            >
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex md:space-x-10 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
        <Link to="/products" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Products</Link>
        <Link to="/contact" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Contact</Link>
        <Link to="/services" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Services</Link>
      </div>

      {/* Right side - Login and Signup buttons */}
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            {/* Search Icon */}
            <span className="inline-flex rounded-md ml-2">
                <button
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                onClick={() => alert('Open search functionality')}
                >
                {/* New Search Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 14a7 7 0 017-7 7 7 0 01-7 7zm0 0l4 4" />
                </svg>
                </button>
            </span>
            {/* Cart Icon */}
            <span className="inline-flex rounded-md ml-2">
                <Link
                to="/cart"
                className="inline-flex items-center hover:text-gray-300 transition duration-150 ease-in-out"
                >
                {/* Cart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l3 9h10l3-9h2M6 12h12m-3 4v2a2 2 0 11-4 0v-2m-2 0h4m0 0H9" />
                </svg>
                </Link>
            </span>

            {/* Get Started Button */}
            <span className="inline-flex">
                <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                >
                Get Started
                </Link>
            </span>
        </div>

    </nav>
  );
};

export default Navbar;
