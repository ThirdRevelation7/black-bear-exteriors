import { assets } from "../assets/assets";
import RevealOnScroll from "./RevealOnScroll";

const Footer = () => {
    return (
        <RevealOnScroll direction="left">
            <div className="pt-2 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="flex-col overflow-hidden">
                        <img src="./brown-logo.png" alt="company logo" className="h-40" />
                        <p className="text-gray-400 max-w-md pb-9">
                            Providing comprehensive exterior remodeling and new construction services. &copy;{new Date().getFullYear()}
                        </p>
                    </div>
                    <div className="flex-col mt-13">
                        <h2 className="font-bold text-white underline underline-offset-4 decoration-1">Our Company</h2>
                        <ul className="text-gray-400 flex-col flex py-2">
                            <a href="#Header">Header</a>
                            <a href="#About">About Us</a>
                            <a href="#Testimonials">Testimonials</a>
                            <a href="#Contact">Contact Us</a>
                        </ul>
                    </div>
                    <div></div>
                </div>
                <div>

                </div>
            </div>
        </RevealOnScroll>
    );
};

export default Footer;