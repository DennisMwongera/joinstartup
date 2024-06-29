import { title } from "process";

const cause = [];
import uuid4 from "uuid4";
import { EducationHutShankarpur } from "./cause-list/education-hut-shankarpur";
import { EducationHutKanpur } from "./cause-list/education-hut-kanpur";
import { EducationHutRajhi } from "./cause-list/education-hut-rajhi";
import { khyaliv } from "./cause-list/khyal-iv";
import { khyaliii } from "./cause-list/khyal-iii";
import { khyalii } from "./cause-list/khyal-ii";
import { khyal } from "./cause-list/khyal";
import { plantation } from "./cause-list/plantation";
import { floodRelief } from "./cause-list/flood-relief";
import { blooddonation } from "./cause-list/blooddonation";
import { bookbank } from "./cause-list/bookbank";

export interface ProjectOrganizer {
  name: string;
  role: string;
  category: string;
  location: string;
  date: string;
}

export interface CausesDetails {
  badgeText: string;
  goalAmount: string;
  progressPercentage: number;
  mainImageSrc: string;
  mainImageAlt: string;
  title: string;
  description1: string;
  description2: string;
  smallImages: string[];
  organizer: ProjectOrganizer;
  detail: any[];
  topDonater: any[];
}

export const sampleOrganizer: ProjectOrganizer = {
  name: "Samsad Alam",
  role: "Founder",
  category: "Education",
  location: "Gorakhpur",
  date: "20 Dec, 2021",
};

export const educationCause: CausesDetails = {
  badgeText: "Education",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/education/img2.jpg",
  mainImageAlt: "Cause Details",
  detail: [
    {
      id: uuid4(),
      title: "About Education Hut School",
      description:
        "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
      image: "",
      description1: "",
    },
    {
      id: uuid4(),
      title: "Our Plan",
      description:
        "During any national holiday, we organize a cultural function where students can perform lok-geets, dances of their choice and anything else presentable. These days are very jubilous to witness at the education Hut school. We are also joined by the full team at the school other than teachers and they share goodies with the children. After annual exams every year, the toppers of every class are given certificate and trophies. The painting competion and other sports winners are also awarded with medals. Through this, we foster competion. This also keeps children build faith upon themselves and try to come up best.",
      image: "",
      description1: "",
    },
  ],
  title: "Give children a good education and a better life",
  description1:
    "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
  description2:
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
  smallImages: [
    "/assets/img/causes/education/1.jpg",
    "/assets/img/causes/education/2.jpg",
    "/assets/img/causes/education/3.jpg",
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
  organizer: sampleOrganizer,
};
export const amrit: CausesDetails = {
  badgeText: "Education",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/education/img2.jpg",
  mainImageAlt: "Cause Details",
  detail: [
    {
      id: uuid4(),
      title: "About Amrit",
      description:
        "On this World Water Day We are very happy and excited to launch our new campaign AMRIT. Under this campaign, we will work on several issues related to water. It is going to be a very huge campaign covering a large number of masses and issues. As we know that groundwater pollution is one of the major problem especially in rural areas as they use groundwater directly for drinking and other household purposes without using any filters. And there are several toxic chemicals and impurities present in polluted groundwater which is a threat to humans as well as to flora and fauna. So, in this campaign the first task we would take on is to work on groundwater pollution. Groundwater is invisible, but its impact is visible everywhere. Out of sight, under our feet, groundwater is a hidden treasure that enriches our lives. Almost all of the liquid freshwater in the world is groundwater.As climate change gets worse, groundwater will become more and more critical.",
      image: "",
      description1: "",
    },
    {
      id: uuid4(),
      title: "Our Plan",
      description:
        "We need to work together to sustainably manage this precious resource.Groundwater may be out of sight, but it must not be out of mind. Groundwater needs to be used carefully and sustainably – but we cannot manage what we do not measure. Groundwater must be thoroughly explored, analyzed and monitored. We are looking for innovative ideas from your side for this campaign.So if you have any please share with us. You can also share your real life experience, story, problem or anything of such kind about groundwater pollution. We would also approach several places under our Mission to make clean water available for all by installing appropriate water treatment plans. So, if you have any place ( village, town or city) in your knowledge let us know. We would love to hear from you. We also proudly announce Together Ek Saath Foundation as our sponsor for this campaign. Join us in this campaign !!",
      image: "",
      description1: "",
    },
  ],
  title: "Give children a good education and a better life",
  description1:
    "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
  description2:
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
  smallImages: [
    "/assets/img/causes/education/amrit.jpg",
    "/assets/img/causes/education/amrit2.jpg",
    "/assets/img/causes/education/3.jpg",
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
  organizer: sampleOrganizer,
};

export const quizCause: CausesDetails = {
  badgeText: "Education",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/quiz/7.jpg",
  mainImageAlt: "About Quiz Competition",
  detail: [
    {
      id: uuid4(),
      title: "About Amrit",
      description:
        "This year something unique was planned by us to celebrate National Girl Child Day. For the same, we conducted 'Samanya Gyan Pratyogita' in collaboration with Pratibha Welfare Society at our Education Hut School with the help and cooperation of our school staff. We were very happy to see so many young faces enthusiastically taking part in the competition.The purpose of the competition is to encourage and boost up the morale of the girls towards learning and competition. We would also be providing exciting prizes to the winners of the competition.Our President Shamshad Alam Sir as well as the President of Pratibha Welfare Society Karuna Bhadani ma'am were also present during the event.",
      image: "/assets/img/causes/quiz/7.jpg",
      description1: "",
    },
    {
      id: uuid4(),
      title: "Our Plan",
      description:
        "In this competition Khushi Sahani stood first, Deepali Madheshia second and Priya Gupta stood at third place.The first position holder Khushi Sahani was awarded a bicycle, Deepali Madheshia was given school kit and Priya Gupta was given a wall clock and also all the other participants were rewarded.On this occasion, Shamshad Alam, President of Shine NGO and Mrs. Karuna ji, President of Pratibha Welfare Society, said that by organizing such competitions, they would try their best to enhance the confidence of the children and provide them a platform to showcase their talent.Along with this, National Girl Child Day was also celebrated by giving many gifts to the girls. The beautiful faces of the little girls lit up after receiving the gifts and prizes.Aman, Arjun, Deepak, Santosh, Raghavendra, Archit, Akash and other team members were also present on this occasion.",
      image: "/assets/img/causes/quiz/11.jpg",
      description1: "",
    },
  ],
  title: "Give children a good education and a better life",
  description1:
    "The brick walls of school are stronger than any other fortresses of the world. Eduaction hut school teaches class 1-3 kids of the village where they are provided with books, bags, sweaters etc. The school has a eight hour schedule where focus on every subject is given. Martial arts and social skills are also taught to them. At school, We hope to bring a change in their lives with eduaction.eryone has equal rights for the education from birth. The growth and development of any Mornings at Eduaction hut School. There is a morning assembly which starts with morning prayers and from there students go to their classes. In break they can play at the ground and also have their lunches. Till the end of the day, they are given homework and schedule for next day.",
  description2:
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
  smallImages: [
    "/assets/img/causes/education/1.jpg",
    "/assets/img/causes/education/7.jpg",
    "/assets/img/causes/education/4.jpg",
    "/assets/img/causes/education/3.jpg",
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
  organizer: sampleOrganizer,
};
export const BlanketCause: CausesDetails = {
  badgeText: "Health",
  goalAmount: "11,000",
  progressPercentage: 89,
  mainImageSrc: "/assets/img/causes/blanket/1.jpg",
  mainImageAlt: "About Blanket Distribution",
  detail: [
    {
      id: uuid4(),
      title: "About Amrit",
      description:
        "People usually say that thousands of people die of cold, but we say that they die due to lack of woollen clothes and blankets. They shiver due to cold breeze all night and many old age persons die of these waves. Keeping all this in view, blanket distribution drive was done by our NGO among 100 old age women at Maharajganj Chauraha (in the market) with the courtesy of Mrs. Sandhya Chowdhary and Mr. Shubham Chowdhary so that they may be able to protect themselves from cold in winter nights. All the beneficiaries were very happy to get the blankets and thanked our team. With the courtesy of Shri Shubham Choudhary ji, our NGO is conducting such blanket distribution programs for four consecutive years.",
      image: "/assets/img/causes/blanket/1.jpg",
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
    "/assets/img/causes/blanket/1.jpg",
    "/assets/img/causes/blanket/2.jpg",
    "/assets/img/causes/blanket/3.jpg",
    "/assets/img/causes/blanket/5.jpg",
    "/assets/img/causes/blanket/4.jpg",
    "/assets/img/causes/blanket/6.jpg",
    "/assets/img/causes/blanket/7.jpg",
    "/assets/img/causes/blanket/8.jpg",
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
  organizer: sampleOrganizer,
};
export const causeDetailData: any = {
  education: educationCause,
  amrit: amrit,
  "quiz-competition": quizCause,
  "blanket-distribution": BlanketCause,
  "book-bank": bookbank,
  "blood-donation": blooddonation,
  "flood-relief": floodRelief,
  plantation: plantation,
  khyal: khyal,
  "khyal-ii": khyalii,
  "khyal-iii": khyaliii,
  "khyal-iv": khyaliv,
  "education-hut-rajhi": EducationHutRajhi,
  "education-hut-kanpur": EducationHutKanpur,
  "education-hut-shankarpur": EducationHutShankarpur,
};
