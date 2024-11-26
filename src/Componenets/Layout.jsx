import React from 'react'
import Header from './Header';
import Hero from "./Hero"
import Features from './Features';
import FAQandFooter from './FAQandFooter';
function Layout() {
    return (
        <>

            <div
                className="bg-[url('background-image.png')]  bg-black bg-cover bg-center min-h-screen "
                style={{
                    backgroundPosition: "", // Move the background image 50px down
                }}
            >
                {/* Header */}
                <Header />

                {/* Hero Section */}
                <Hero />



            </div>
            <Features />
            <FAQandFooter/>
        </>
    );
}

export default Layout
