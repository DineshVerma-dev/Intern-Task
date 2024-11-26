import React from "react";

const Hero = () => {
    return (
        <section
            className=" relative overflow-hidden"
            style={{ minHeight: "100vh"  }}
        >
           

            {/* Content Wrapper */}
            <div className="relative z-10 text-white font-fira container mx-auto flex flex-col   py-16 px-6">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Trusted  Multi-Chain <span className="text-yellow-400">DEX</span> Platform
                </h1>
                {/* Subtitle */}
                <p className="text-gray-400 text-lg md:text-xl mb-8">
                    Trade, earn, and own crypto on the all-in-one multi-chain DEX
                </p>

                {/* Buttons */}
                <div className="flex space-x-4">
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
