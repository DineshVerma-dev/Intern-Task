import React, { useState } from 'react';

function FAQs() {
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
        <div className="bg-gray-900 h-full flex justify-center px-10 pb-7 text-white">
            
            <div className="py-24 bg-gray-800  w-full rounded-2xl   px-11 ">
                <h2 className="text-center text-5xl  font-bold text-yellow-500 mb-8">FAQs</h2>
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
        </div>
    );
}

export default FAQs;
