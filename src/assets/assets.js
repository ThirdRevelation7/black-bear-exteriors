import fence_img from "./fence.jpg";
import front_patio from "./front-patio-front.jpg";
import deck_before from "./deck-before.jpg";
import deck_after from "./deck-after.jpg";
import man_gutter from "./man-gutter.png";
import female_user from "./female-user.png";
import male_user from "./male-user.png";
import female_user_2 from "./female-user-2.png";
import deck_under from "./deck-underneath.jpg";
import bears from "./bears.png";
import logo from "./clear-logo.png";

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
        image: female_user_2,
        userName: "Sandra Krantz",
        date: "05/20/2025",
        rating: 5,
        text: "Landon's attention to detail and expert work exceeded my expectations. My fence is beautiful. Many thanks for a job well done!"
    },
    {
        image: male_user,
        userName: "Marbella Condominiums - YMG",
        date: "01/29/2025",
        rating: 5,
        text: "Blackbear is very prompt and thorough. I appreciate their attention to detail."
    },
    {
        image: female_user,
        userName: "Angela McReynolds",
        date: "11/15/2024",
        rating: 5,
        text: 'We use Black Bear every year for the outside Christmas lights. Always on time, easy to schedule with, professional. Thank you!! Highly recommend adding them to your list as your "go to" for services.'
    }
];