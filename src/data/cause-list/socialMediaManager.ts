import uuid4 from "uuid4";
import { CausesDetails, sampleOrganizer } from "../cause";

export const socialMediaManager: CausesDetails = {
    badgeText: "Social Media",
    goalAmount: "20,000",
    progressPercentage: 85,
    mainImageSrc: "assets/img/causes/1.jpg",
    mainImageAlt: "Social Media Manager",
    detail: [
        {
            id: uuid4(),
            title: "Social Media Manager",
            description: "I will take your social media to new heights!",
            image: "assets/img/causes/1.jpg",
            description1: "",
        },
    ],
    title: "Social Media Manager",
    description1: "I will take your social media to new heights! As a skilled social media manager, I offer comprehensive services to boost your online presence and engage your target audience effectively.",
    description2: "With my expertise, you can expect increased followers, improved engagement rates, and a stronger brand identity across all major social media platforms.",
    smallImages: [
        "assets/img/causes/1.jpg",
        // Add more relevant images if needed
    ],
    topDonater: [
        {
            id: uuid4(),
            name: "John Doe",
            amount: "500",
            img: "/assets/img/sidebar/rec-donet-1.png",
        },
        // Add more top donaters if needed
    ],
    organizer: {
        name: "Tiffany Nyambura",
        role: "Social Media Expert",
        category: "Digital Marketing",
        location: "Online",
        date: "20 June, 2024",
    },
};
