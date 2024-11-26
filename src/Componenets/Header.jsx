import React from "react";

function Header() {
  const navItems = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Roadmap" },
    { name: "FAQs" },
    { name: "Contact Us" },
  ];

  return (
    <>
      {/* Header Section */}
      <header className="bg-transparent">
        <div className="container mx-auto flex justify-evenly items-center py-10 px-6">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold">
            <img
              src="/moonex.png" // Replace with your logo image path
              alt="Logo"
              className="" // Adjust size and spacing
            />
           
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-10 text-xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <button className="hover:text-yellow-400 text-white font-fira">{item.name}</button>
              </li>
            ))}
          </ul>

          {/* Wallet Button */}
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-500">
            Connect Wallet
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
