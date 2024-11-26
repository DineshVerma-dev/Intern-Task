import React from 'react';

function Features() {
  const comparisonData = [
    { point: "Point no one", moonEx: true, uniswap: false },
    { point: "Point no two this", moonEx: true, uniswap: false },
    { point: "Point no two this", moonEx: true, uniswap: false },
    { point: "Point no two this", moonEx: true, uniswap: false },
    { point: "Point no two this", moonEx: true, uniswap: false },
  ];

  const features = [
    {
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
      icon: "💲",
    },
    {
      title: "CertiK",
      description: "We are Audited by CertiK, the leading security-focused ranking platform",
      icon: "✅",
    },
    {
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
      icon: "✂️",
    },
    {
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
      icon: "🔄",
    },
  ];

  return (
    <div className="bg-gray-900  text-white py-12 px-6">
      {/* Comparison Table */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Why <span className="text-yellow-500">MoonEX</span>?
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full max-w-4xl mx-auto border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 border border-gray-700">Comparison</th>
                <th className="px-4 py-2 border border-gray-700">MoonEx</th>
                <th className="px-4 py-2 border border-gray-700">Uniswap</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-700">{row.point}</td>
                  <td className="px-4 py-2 border border-gray-700">
                    {row.moonEx ? "✅" : "❌"}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    {row.uniswap ? "✅" : "❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;