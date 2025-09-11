import { useState } from "react";
import { toast } from "react-toastify";
import RevealOnScroll from "./RevealOnScroll";


const Contact = () => {
    // Web3 email logic
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7bf22dfe-d3fe-4711-bcfe-325dadabd1a8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Email Sent Successfully 🚀");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <RevealOnScroll direction="right">
            <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline underline-offset-4 decoration-1 under font-light">Us</span></h1>
                <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                    Let us know how we can help!
                </p>

                {/* Email form */}
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 text-left">
                            Name
                            <input type="text" placeholder="Name" required className="w-full border border-gray-300 py-3 px-4 mt-2 focus:outline-[#e7cc9b] focus:outline-1 focus:rounded focus:shadow-2xl rounded focus:-translate-y-1.5 transition-transform duration-300" name="Name" />
                        </div>
                        <div className="w-full md:w-1/2 text-left md:pl-4">
                            Email
                            <input type="email" placeholder="Email" required className="w-full border border-gray-300 py-3 px-4 mt-2 focus:outline-[#e7cc9b] focus:outline-1 focus:rounded focus:shadow-2xl rounded focus:-translate-y-1.5 transition-transform duration-300" name="Email" />
                        </div>
                    </div>
                    <div className="my-6 text-left">
                        Message
                        <textarea name="Message" placeholder="Message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-[#e7cc9b] focus:outline-1 focus:rounded focus:shadow-2xl focus:-translate-y-1.5 transition-transform duration-300">
                        </textarea>
                    </div>
                    <button className="bg-[#ebdfc9] text-black py-2 px-12 rounded cursor-pointer mb-10 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl">
                        {result ? result : "Send Email"}
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    );
};

export default Contact;