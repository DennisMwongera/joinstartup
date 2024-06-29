import uuid4 from "uuid4";
import { CausesDetails, sampleOrganizer } from "../cause";

export const blooddonation: CausesDetails = {
  badgeText: "Health",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/blood/1.jpg",
  mainImageAlt: "About Blood Donation",
  detail: [
    {
      id: uuid4(),
      title: "About Blood Donation",
      description:
        "Our organization is very old, and we work for education and welfare. During covid, we started off as the situation unfolded. First, we did many awareness programs in rural areas with the help of respective S.H.O. Second, when there was a panic migration, we collaborated with community kitchen of Gorakhpur and served packed food at highway near Gorakhnath. Third, our volunteers worked day and night to get correct verified leads about hospital, medicine, blood, oxygen cylinder etc. Fourth, being involved in verifying leads, we met several black marketers who were immediately warned and reported under cybercrime. Fifth, we distributed masks and sanitized the villages during second wave. All such works were done under the able leadership of our president Mr. Shamshad Alam. So, I would nominate him for directing the best work under our NGO in the city.",
      image: "/assets/img/causes/blood/1.jpg",
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
    "/assets/img/causes/blood/1.jpg",
    "/assets/img/causes/blood/2.jpg",
    "/assets/img/causes/blood/3.jpg",
    "/assets/img/causes/blood/5.jpg",
    "/assets/img/causes/blood/4.jpg",
    "/assets/img/causes/blood/6.jpg",
    "/assets/img/causes/blood/7.jpg",
    "/assets/img/causes/blood/8.jpg",
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
