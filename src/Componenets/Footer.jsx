import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  p-28  text-white py-8">
      <div className="max-w-screen-xl m-10 mx-auto flex justify-between items-center px-6">
       
        <div className="flex items-center">
          <img
            src="/moonex.png" 
            alt="Logo"
            className="h-20"
          />
        </div>

      
        <div className="flex space-x-6 text-xl font-fira">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>


        <div className="flex space-x-4 text-xl">
          <div>
            Contact Us
          </div>






        </div>
      </div>
    </footer>
  );
}

export default Footer;
