import RevealOnScroll from "./RevealOnScroll";



const About = () => {
    return (
        <RevealOnScroll direction="left">
            {/* About Container */}
            <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px20 lg:px-32 w-full overflow-hidden" id="About">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
                <p className="text-gray-500 max-w-80 text-center mb-8">What we do, and Who we are.</p>
                <div className="flex flex-col md:flex-row md:items-start items-center md:gap-20">
                    <img src="./src/assets/clear-logo.png" alt="man building patio" className="w-full max-w-lg sm:w-1/2 rounded-2xl shadow-2xl" />
                    <div className="flex flex-col items-center md:items-start mt-10 text-gray-500">
                        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                            <div>
                                <p className="text-4xl font-medium text-gray-800">10+</p>
                                <p>Jobs in Progress</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">15+</p>
                                <p>Years of Experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">1000+</p>
                                <p>Jobs Completed</p>
                            </div>
                            <div>
                                <p className="text-4xl font-medium text-gray-800">Infinite &#8734;</p>
                                <p>Dedication to improving your home</p>
                            </div>
                        </div>
                        <p className="my-10 max-w-lg">
                            My company provides comprehensive exterior remodeling and new construction services. Our primary goal is to deliver high-quality, durable, and aesthetically pleasing outdoor spaces and home exteriors. By acting as a general contractor, we can seamlessly manage multi-faceted exterior projects, from initial design to final installations.
                        </p>
                        <a href="#Testimonials" className="bg-[#ebdfc9] text-black px-8 py-2 rounded cursor-pointer hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl">Hear from others</a>
                        {/* e7ddca */}
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default About;