
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Roadmap" },
    { name: "FAQs" },
    { name: "Contact Us" },
  ];

  return (
    <header className="bg-transparent w-full ">
      <div className="container mx-auto flex justify-between items-center py-10  px-6 sm:px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold">
          <img
            src="/moonex.png" 
            alt="Logo"
            className="h-10 sm:h-16"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden md:flex space-x-8 text-base lg:text-xl text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <button className="hover:text-yellow-400 font-fira">{item.name}</button>
            </li>
          ))}
        </ul>

        {/* Wallet Button */}
        <button className="hidden md:block bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-4 py-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button className="hover:text-yellow-400 font-fira">
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
