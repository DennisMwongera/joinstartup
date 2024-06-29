import uuid4 from "uuid4";
import { CausesDetails, sampleOrganizer } from "../cause";

export const plantation: CausesDetails = {
  badgeText: "Enviroment",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/plantation/1.jpg",
  mainImageAlt: "About Plantation",
  detail: [
    {
      id: uuid4(),
      title: "About Plantation",
      description:
        "There is no need to explain why we all must try to save environment.The easiest way out there is only through community participation. We appealed to our viewers to plant trees and send us pictures. The event saw a widespread popularity by not only crossing our target of 550 plants but also being helped in by people situated internationally. Various professions, age, residences clubbed together to make this happen.",
      image: "/assets/img/causes/plantation/1.jpg",
      description1: "",
    },
  ],
  title: "Give children a good education and a better life",
description1:
    "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
  description2:
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
  smallImages: [
    "/assets/img/causes/plantation/1.jpg",
    "/assets/img/causes/plantation/2.jpg",
    "/assets/img/causes/plantation/3.jpg",
    "/assets/img/causes/plantation/4.jpg",
    "/assets/img/causes/plantation/6.jpg",
    "/assets/img/causes/plantation/7.jpg",
  ],
  topDonater: [
    {
      id: uuid4(),
      name: "Sudhakar",
      amount: "100",
      img: "/assets/img/sidebar/rec-donet-2.png",
    },
    {
      id: uuid4(),
      name: "Sudhakar",
      amount: "100",
      img: "/assets/img/sidebar/rec-donet-2.png",
    },
    {
      id: uuid4(),
      name: "Sudhakar",
      amount: "100",
      img: "/assets/img/sidebar/rec-donet-2.png",
    },
    {
      id: uuid4(),
      name: "Sudhakar",
      amount: "100",
      img: "/assets/img/sidebar/rec-donet-2.png",
    },
    {
      id: uuid4(),
      name: "Sudhakar",
      amount: "100",
      img: "/assets/img/sidebar/rec-donet-2.png",
    },
  ],
  organizer: {
    name: "Samsad Alam",
    role: "Founder",
    category: "Education",
    location: "Gorakhpur",
    date: "20 Dec, 2021",
  },
};
