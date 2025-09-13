import { testimonialsData } from "../assets/assets";
import RevealOnScroll from "./RevealOnScroll";

const Testimonials = () => {
    return (
        <RevealOnScroll direction="left" threshold={0.12}>
            {/* Testimonials Container */}
            <div className="container mx-auto py-20 lg:px-32 w-full overflow-hidden" id="Testimonials">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span></h1>
                <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Just a few of the many people we've worked with!</p>
                {/* Testimonial Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="max-w-[340px] hover:shadow-2xl hover:-translate-y-1.5 duration-300 transition-all shadow-xl rounded px-8 py-12 text-center border border-gray-200"

                            onTouchStart={(e) => {
                                e.currentTarget.classList.remove("shadow-xl");
                                e.currentTarget.classList.add("shadow-2xl", "-translate-y-2");
                            }}
                            onTouchEnd={(e) => {
                                e.currentTarget.classList.remove("shadow-2xl", "-translate-y-2");
                                e.currentTarget.classList.add("shadow-xl");
                            }}>

                            <img className="w-20 h-20 rounded-full bg-blue-200 mx-auto mb-4" src={testimonial.image} alt="user image" />
                            <h2 className="font-medium underline decoration-0 underline-offset-2 text-xl text-gray-700">{testimonial.userName}</h2>
                            {/* <p>{testimonial.date}</p> */}
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                            <p className="text-gray-600">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default Testimonials;