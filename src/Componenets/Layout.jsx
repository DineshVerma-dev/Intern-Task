import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import FAQs from './FAQs';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div
        className="bg-gray-900 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('background-image.png')",
        }}
      >
      
        <Header />
 
        <Hero />
      </div>
      <Features />
      <FAQs/>
      <Footer/>
    </>
  );
}

export default Layout;
