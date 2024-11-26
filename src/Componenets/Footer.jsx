import React, { useState } from 'react';

function Footer() {
  

  return (
    <div className="bg-gray-900 text-white  ">
     

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-4 lg:space-y-0">
          {/* Left Section */}
          <div className="text-yellow-500 flex flex-col items-center lg:items-start">
            <img
              src="/moonx.png" // Replace with your logo path
              alt="Moonex Logo"
              className="mb-3 w-20"
            />
            <p>MoonEx</p>
          </div>

          {/* Center Section */}
          <div className="text-gray-400 space-y-2">
            <p>About Us</p>
            <p>Roadmap</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>

          {/* Right Section */}
          <div className="text-gray-400 space-y-2 text-center lg:text-right">
            <h4 className="font-bold text-white">Contact Us</h4>
            <p>
              <a href="#" className="hover:text-yellow-500">Telegram</a>
            </p>
            <p>
              <a href="#" className="hover:text-yellow-500">Reddit</a>
            </p>
            <p>
              <a href="#" className="hover:text-yellow-500">Twitter</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
