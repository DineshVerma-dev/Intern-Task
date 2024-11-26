import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import FAQandFooter from './FAQandFooter';

function Layout() {
  return (
    <>
      <div
        className="bg-gray-900 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('background-image.png')",
        }}
      >
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero />
      </div>

      {/* Features and Footer */}
      <Features />
      <FAQandFooter />
    </>
  );
}

export default Layout;
