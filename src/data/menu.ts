import { generateSlug } from "@/util/slug";
import uuid4 from "uuid4";
export interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

export interface MenuData {
  menu: MenuItem[];
}

export const navMenu = {
  desktop: [
    {
      id: uuid4(),
      title: "Home",
      href: "/",
    },
    { id: uuid4(),
      title: "Marketplace",
      href: "marketplace",
    },
    // { id: uuid4(), title: "About", href: "marketplace" },
    // { id: uuid4(), title: "Media/News", href: "media-announcement-and-news" },
    // { id: uuid4(), title: "Team", href: "team" },
    // {
    //   id: uuid4(),
    //   title: "Causes",
    //   href: "/gig",
    //   submenu: [
    //     {
    //       id: uuid4(),
    //       title: "Education",
    //       href: "/gig/" + generateSlug("Education"),
    //       submenu: [
    //         {
    //           id: uuid4(),
    //           title: "Rajhi",
    //           href: "/gig/" + generateSlug("education hut rajhi"),
    //         },
    //         {
    //           id: uuid4(),
    //           title: "Kanpur",
    //           href: "/gig/" + generateSlug("education hut kanpur"),
    //         },
    //         {
    //           id: uuid4(),
    //           title: "Shankarpur",
    //           href: "/gig/" + generateSlug("education hut shankarpur"),
    //         },
    //       ],
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Khyal",
    //       href: "/gig/" + generateSlug("Khyal"),
    //       submenu: [
    //         {
    //           id: uuid4(),
    //           title: "II",
    //           href: "/gig/" + generateSlug("khyal II"),
    //         },
    //         {
    //           id: uuid4(),
    //           title: "III",
    //           href: "/gig/" + generateSlug("khyal III"),
    //         },
    //         {
    //           id: uuid4(),
    //           title: "IV",
    //           href: "/gig/" + generateSlug("khyal IV"),
    //         },
    //       ],
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Blood Donation",
    //       href: "/gig/" + generateSlug("Blood Donation"),
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Plantation",
    //       href: "/gig/" + generateSlug("Plantation"),
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Flood Relief",
    //       href: "/gig/" + generateSlug("Flood Relief"),
    //     },
    //
    //     {
    //       id: uuid4(),
    //       title: "Book Bank",
    //       href: "/gig/" + generateSlug("Book Bank"),
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Blanket Distribution",
    //       href: "/gig/" + generateSlug("Blanket Distribution"),
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Quiz Competition",
    //       href: "/gig/" + generateSlug("Quiz Competition"),
    //     },
    //     {
    //       id: uuid4(),
    //       title: "Amrit",
    //       href: "/gig/" + generateSlug("Amrit"),
    //     },
    //   ],
    // },
    // // {
    // //   id: uuid4(),
    // //   title: "Events",
    // //   href: "our-events",
    // // },
    // {
    //   id: uuid4(),
    //   title: "Gallery",
    //   href: "our-gallery",
    // },
    //
    // { id: uuid4(), title: "Contact", href: "contact-us" },
  ],

  mobile: [],
};
