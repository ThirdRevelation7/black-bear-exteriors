import fence_img from "./fence.jpg";
import front_patio from "./front-patio-front.jpg";
import deck_before from "./deck-before.jpg";
import deck_after from "./deck-after.jpg";
import man_gutter from "./man-gutter.png";
import user_1 from "./user-1.png";
import user_2 from "./user-2.png";
import user_3 from "./user-3.png";
import user_4 from "./user-4.png";
import deck_under from "./deck-underneath.jpg";
import wood_stain from "./wood-staining.jpg";
import bears from "./bears.png";
import logo from "./clear-logo.png";
import { image } from "framer-motion/client";

export const assets = {
    fence_img,
    front_patio,
    deck_before,
    deck_after,
    logo
};

export const projectsData = [
    {
        title: "Fences",
        price: "$500",
        img: fence_img
    },
    {
        title: "Front Patios",
        price: "$1000",
        img: front_patio
    },
    {
        title: "Before",
        price: "$0",
        img: deck_before
    },
    {
        title: "After",
        price: "$5000",
        img: deck_after
    },
    {
        title: "Solid Foundations",
        img: deck_under
    },
    {
        title: "Wood Staining",
        img: wood_stain
    },
    {
        title: "Gutter Repairs",
        price: "Priceless",
        img: man_gutter
    },
    {
        title: "And many more...",
        img: bears
    }
];

export const testimonialsData = [
    {
        image: user_1,
        userName: "Sandra Krantz",
        date: "05/20/2025",
        rating: 5,
        text: "Landon's attention to detail and expert work exceeded my expectations. My fence is beautiful. Many thanks for a job well done!"
    },
    {
        image: user_2,
        userName: "Marbella Condominiums - YMG",
        date: "01/29/2025",
        rating: 5,
        text: "Blackbear is very prompt and thorough. I appreciate their attention to detail."
    },
    {
        image: user_3,
        userName: "Angela McReynolds",
        date: "11/15/2024",
        rating: 5,
        text: 'We use Black Bear every year for the outside Christmas lights. Always on time, easy to schedule with, professional. Thank you!! Highly recommend adding them to your list as your "go to" for services.'
    },
    {
        image: user_4,
        userName: "Michelle Liepham-Weiershauser",
        date: "09/11/2025",
        rating: 5,
        text: "Service was timely, he did great work and kept us informed the entire time. Will definitely use them again."
    }
];