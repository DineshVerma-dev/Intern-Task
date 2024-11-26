import React from "react";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ minHeight: "100vh" }}
    >
     
      <div className="relative z-10 font-fira container mx-auto flex flex-col justify-center items-center sm:items-start text-center sm:text-left py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug">
          Trusted Multi-Chain <br />
          <span className="text-yellow-400">DEX</span> Platform
        </h1>

       
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-md sm:max-w-lg">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>

      
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
            Connect Wallet
          </button>
          <button className="border border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            Trade Crypto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

