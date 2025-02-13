import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-pink-700">MoiStiq</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Incidunt consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-pink-700">About Us</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Company History</a></li>
              <li><a href="#">Meet the Team</a></li>
              <li><a href="#">Employee Handbook</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-pink-700">Our Services</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Google Ads</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-pink-700">Resources</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Online Guides</a></li>
              <li><a href="#">Conference Notes</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Upcoming Events</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>Copyright © 2022. All rights reserved.</p>
          
          {/* Stay in Touch */}
          <div>
            <h3 className="text-xl font-semibold text-pink-700">Stay in Touch</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-4 flex w-full max-w-md">
              <input type="email"  placeholder="Enter your email"  className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"/>
              <button className="w-32 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebookF size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaGithub size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaGlobe size={18} /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
