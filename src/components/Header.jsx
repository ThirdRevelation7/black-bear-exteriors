import React from "react";
import NavBar from "./NavBar";
import RevealOnScroll from "./RevealOnScroll";


const Header = () => {
    return (

        <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: "url('/header-img.png')" }} id="Header">
            <NavBar />
            <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl text-white/50 sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">We make your house a home.</h2>
                <div className="space-x-6 mt-16">
                    <a href="#Projects" className="border border-white hover:bg-white/10 backdrop-blur-3xl px-8 py-3 rounded">Projects</a>
                    <a href="#Contact" className="bg-amber-200/10 backdrop-blur-3xl border-white/10 hover:bg-[#ebdfc9] hover:text-black px-8 py-3 rounded">Contact Us</a>
                </div>
            </div>
        </div>

    );
};

export default Header;