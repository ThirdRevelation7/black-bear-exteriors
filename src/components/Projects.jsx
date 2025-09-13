import { useEffect, useState } from "react";
import { projectsData } from "../assets/assets";
import RevealOnScroll from "./RevealOnScroll";
import { div } from "framer-motion/client";


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsShowing, setCardsShowing] = useState(1);

    useEffect(() => {
        const updateCardsShowing = () => {
            if (window.innerWidth >= 1199) {
                setCardsShowing(4);
            } else if (window.innerWidth >= 500) {
                setCardsShowing(2);
            } else {
                setCardsShowing(1);
            }
        };
        updateCardsShowing();
        window.addEventListener('resize', updateCardsShowing);
        return () => window.removeEventListener('resize', updateCardsShowing);

    }, []);

    const nextButton = () => {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % projectsData.length);
    };
    const prevButton = () => {
        setCurrentIndex((previousIndex) => previousIndex === 0 ? projectsData.length - 1 : previousIndex - 1);
    };

    return (
        <RevealOnScroll direction="right">
            <div className="container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden" id="Projects">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
                <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                    Some of the many ways we can improve your home.
                </p>
                {/* slideshow buttons */}
                <div className="flex justify-end mb-8 items-center">
                    <button onClick={prevButton} className="px-3 py-2 bg-gray-200 rounded mr-2 cursor-pointer hover:bg-[#ebdfc9]" aria-label="Previous">&#8676;</button>
                    <button onClick={nextButton} className="px-3 py-2 bg-gray-200 rounded mr-2 cursor-pointer hover:bg-[#ebdfc9]" aria-label="Next">&#8677;</button>
                </div>
                {/* slideshow container */}
                <div className="overflow-hidden">
                    <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex * 105) / cardsShowing}%)` }}>
                        {projectsData.map((project, index) => (
                            <div key={index} className="relative flex-shrink-0" style={{ flexBasis: `${100 / cardsShowing}%` }}>
                                <img src={project.img} alt={project.title} className="w-100 h-100 object-cover mb-12" />
                                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                        <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default Projects;