import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#f5f6f8] pt-16 md:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">

          {/* LEFT BRAND */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-10" />
              <h1 className="text-xl font-bold">
                <span className="text-indigo-500">E</span>
                <span className="text-orange-400">- WALLET</span>
              </h1>
            </div>

            <p className="text-gray-500 mt-6 max-w-xs">
              Open an account in minutes, get full financial
              control for much longer.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8">

              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-indigo-500 hover:text-white transition">
                <FaTwitter />
              </div>

            </div>
          </div>

          {/* PRODUCT */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">Product</h3>
            <ul className="mt-6 space-y-4 text-gray-500">
              <li>Features</li>
              <li>Security</li>
              <li>Get App</li>
              <li>Nightly</li>
            </ul>
          </div>

          {/* STATUS */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">Status</h3>
            <ul className="mt-6 space-y-4 text-gray-500">
              <li>Get Involved</li>
              <li>About</li>
              <li>Media Kit</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
            <ul className="mt-6 space-y-4 text-gray-500">
              <li>Jobs</li>
              <li>Press</li>
              <li>Affiliate</li>
              <li>Kontist Foundation</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-8 text-center text-gray-500 text-sm">
          All rights reserved @devsnet.com
        </div>

      </div>
    </footer>

  );
}