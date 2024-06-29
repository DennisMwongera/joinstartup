import uuid4 from "uuid4";
import { CausesDetails, sampleOrganizer } from "../cause";

export const bookbank: CausesDetails = {
    badgeText: "Education",
    goalAmount: "11,000",
    progressPercentage: 89,
    mainImageSrc: "/assets/img/causes/bookbank/1.jpg",
    mainImageAlt: "About Book Bank",
    detail: [
      {
        id: uuid4(),
        title: "About Book Bank",
        description:
          "Book Bank now in Gorakhpur!! We are very happy to announce that very soon we are going to open a BOOK BANK in our own city Gorakhpur .We are assisted by Pratibha Welfare Society in our this initiative. The book bank will have various books on different courses. The books will be freely provided to the students who need them. The purpose is to make education accessible for all. We expect your contribution and support. You can donate your books for this good cause.",
        image: "/assets/img/causes/bookbank/1.jpg",
        description1: "",
      },
      // {
      //   id: uuid4(),
      //   title: "Our Plan",
      //   description:
      //     "In this competition Khushi Sahani stood first, Deepali Madheshia second and Priya Gupta stood at third place.The first position holder Khushi Sahani was awarded a bicycle, Deepali Madheshia was given school kit and Priya Gupta was given a wall clock and also all the other participants were rewarded.On this occasion, Shamshad Alam, President of Shine NGO and Mrs. Karuna ji, President of Pratibha Welfare Society, said that by organizing such competitions, they would try their best to enhance the confidence of the children and provide them a platform to showcase their talent.Along with this, National Girl Child Day was also celebrated by giving many gifts to the girls. The beautiful faces of the little girls lit up after receiving the gifts and prizes.Aman, Arjun, Deepak, Santosh, Raghavendra, Archit, Akash and other team members were also present on this occasion.",
      //   image: "/assets/img/causes/quiz/11.jpg",
      //   description1: "",
      // },
    ],
    title: "Give children a good education and a better life",
    description1:
      "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
    description2:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
    smallImages: [

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