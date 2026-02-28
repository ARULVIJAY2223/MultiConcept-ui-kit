import { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f6f8]/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="E-Wallet Logo"
            className="h-8 md:h-10 object-contain"
          />

          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              E
            </span>
            <span className="text-orange-400 ml-1">- WALLET</span>
          </h1>
        </Link>

        {/* Global Nav (Desktop) */}
        <nav className="hidden md:flex gap-12 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-indigo-500 transition">
            Services
          </a>
          <a href="#features" className="hover:text-indigo-500 transition">
            Features
          </a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:inline-block text-gray-700 hover:text-indigo-600 font-semibold px-4 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hidden sm:inline-block bg-orange-400 hover:bg-orange-500 text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full font-medium transition shadow-md text-sm md:text-base"
          >
            Sign Up
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-3xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#f5f6f8]/95 backdrop-blur-lg border-b border-gray-200 transition-all duration-300 transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-6 py-10 font-bold text-gray-800">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition-colors">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition-colors">Services</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition-colors">Features</a>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-orange-400 text-white px-10 py-3.5 rounded-full shadow-lg active:scale-95 transition-all"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

