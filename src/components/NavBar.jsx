import React, { useEffect, useState } from "react";

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMobileMenu]);

    return (
        <div className="absolute top-5 left-0 w-full z-10 ">
            <div className="container mx-auto flex justify-between items-center py-1 px-6 md:px-20 lg:px-32 bg-transparent">
                <a href="https://www.instagram.com/black_bear_exteriors" className="rounded-full bg-[#ebdfc9] px-8 py-2 cursor-pointer hidden md:block hover:bg-white/50" target="_blank" rel="noopener noreferrer"><img className="size-6 text-white" src="ig.png" alt="ig image" /></a>
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#Header" className="cursor-pointer transition-all duration-400 hover:bg-white/30 hover:rounded-full hover:px-2">Home</a>
                    <a href="#About" className="cursor-pointer transition-all duration-400 hover:bg-white/30 hover:rounded-full hover:px-2">About</a>
                    <a href="#Projects" className="cursor-pointer transition-all duration-400 hover:bg-white/30 hover:rounded-full hover:px-2">Projects</a>
                    <a href="#Testimonials" className="cursor-pointer transition-all duration-400 hover:bg-white/30 hover:rounded-full hover:px-2">Testimonials</a>
                </ul>
                <a href="#Contact"><button className="hidden md:block bg-[#ebdfc9] hover:bg-white/50 cursor-pointer px-8 py-2 rounded-full">Email Us!</button></a>
                <button className="text-white md:hidden w-7 h-5 cursor-pointer text-3xl" onClick={() => setShowMobileMenu(true)}>&#9776;</button>
            </div>
            {/* -------Mobile menu---------- */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} overflow-hidden top-0 bottom-0 right-0 bg-white/20 backdrop-blur-lg transition-all`}>
                <div className="flex justify-end p-6">
                    <button className="text-4xl cursor-pointer text-white" onClick={() => setShowMobileMenu(false)}>&#215;</button>
                </div>
                <ul className="flex flex-col items-center gap-2 mt-40 px-5 text-lg font-medium">
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block text-white" onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" className="px-4 py-2 rounded-full inline-block text-white" onClick={() => setShowMobileMenu(false)}>About</a>
                    <a href="#Projects" className="px-4 py-2 rounded-full inline-block text-white" onClick={() => setShowMobileMenu(false)}>Projects</a>
                    <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block text-white" onClick={() => setShowMobileMenu(false)}>Testimonials</a>
                    <a href="https://www.instagram.com/black_bear_exteriors" className="px-4 py-2 rounded-full inline-block bg-white" target="_blank" rel="noopener noreferrer"><img src="ig.png" alt="ig image" className="size-5" /></a>
                </ul>

            </div>
        </div>
    );
};

export default NavBar;