import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
         
        
          <div className="flex justify-center sm:justify-start">
            <img
              src="/moonex.png" 
              alt="Logo"
              className="h-20"
            />
          </div>


          <div className="hidden sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 text-xl font-fira sm:space-x-6 justify-center sm:justify-start">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
          </div>

          
          <div className="flex justify-center sm:justify-start text-xl">
            Contact Us
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
