import React, { useState } from 'react';

function FAQandFooter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I get a Referral Code?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "Reach out to our support team to generate your unique referral code.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* FAQ Section */}
      <div className="py-12 px-6">
        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-8">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <button className="text-xl">
                  {activeIndex === index ? "▼" : "▲"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-4 lg:space-y-0">
          {/* Left Section */}
          <div className="text-yellow-500 flex flex-col items-center lg:items-start">
            <img
              src="/path-to-logo.png" // Replace with your logo path
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

export default FAQandFooter;
