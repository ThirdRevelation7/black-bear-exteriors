import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealOnScroll = ({ children, className = "", direction = "up" }) => {
    const { ref, inView } = useInView({
        threshold: 0.20, //Change how soon the ref becomes "in view"
        triggerOnce: true,
    });

    const offset = 130; //Change offset as needed (Starting position from left to right)
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -offset : direction === "right" ? offset : 0,
            y: direction === "up" ? offset : direction === "down" ? -offset : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div //Using a motion div to allow for animations,variants,initial etc
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
