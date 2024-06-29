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
    { id: uuid4(), title: "About", href: "about" },
    // { id: uuid4(), title: "Media/News", href: "media-announcement-and-news" },
    { id: uuid4(), title: "Team", href: "team" },
    {
      id: uuid4(),
      title: "Causes",
      href: "/our-causes",
      submenu: [
        {
          id: uuid4(),
          title: "Education",
          href: "/our-causes/" + generateSlug("Education"),
          submenu: [
            {
              id: uuid4(),
              title: "Rajhi",
              href: "/our-causes/" + generateSlug("education hut rajhi"),
            },
            {
              id: uuid4(),
              title: "Kanpur",
              href: "/our-causes/" + generateSlug("education hut kanpur"),
            },
            {
              id: uuid4(),
              title: "Shankarpur",
              href: "/our-causes/" + generateSlug("education hut shankarpur"),
            },
          ],
        },
        {
          id: uuid4(),
          title: "Khyal",
          href: "/our-causes/" + generateSlug("Khyal"),
          submenu: [
            {
              id: uuid4(),
              title: "II",
              href: "/our-causes/" + generateSlug("khyal II"),
            },
            {
              id: uuid4(),
              title: "III",
              href: "/our-causes/" + generateSlug("khyal III"),
            },
            {
              id: uuid4(),
              title: "IV",
              href: "/our-causes/" + generateSlug("khyal IV"),
            },
          ],
        },
        {
          id: uuid4(),
          title: "Blood Donation",
          href: "/our-causes/" + generateSlug("Blood Donation"),
        },
        {
          id: uuid4(),
          title: "Plantation",
          href: "/our-causes/" + generateSlug("Plantation"),
        },
        {
          id: uuid4(),
          title: "Flood Relief",
          href: "/our-causes/" + generateSlug("Flood Relief"),
        },
      
        {
          id: uuid4(),
          title: "Book Bank",
          href: "/our-causes/" + generateSlug("Book Bank"),
        },
        {
          id: uuid4(),
          title: "Blanket Distribution",
          href: "/our-causes/" + generateSlug("Blanket Distribution"),
        },
        {
          id: uuid4(),
          title: "Quiz Competition",
          href: "/our-causes/" + generateSlug("Quiz Competition"),
        },
        {
          id: uuid4(),
          title: "Amrit",
          href: "/our-causes/" + generateSlug("Amrit"),
        },
      ],
    },
    // {
    //   id: uuid4(),
    //   title: "Events",
    //   href: "our-events",
    // },
    {
      id: uuid4(),
      title: "Gallery",
      href: "our-gallery",
    },

    { id: uuid4(), title: "Contact", href: "contact-us" },
  ],

  mobile: [],
};
