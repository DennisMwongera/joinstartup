import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/layout/Header/Header";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer/Footer";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import AboutTop from "@/components/About/AboutTop";
import About from "@/components/About/About";
import Trending from "@/components/TrendingCause/TrendingCause";
import UpcomingEvent from "@/components/Event/UpcomingEvent";
import Donate from "@/components/Donate/Donate";
import BlogThumb from "@/components/Blog/Blog";
import Subscribe from "@/components/Subscribe/Subscribe";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactMain from "@/components/Contact/Contact";
import GalleryGrid from "@/components/Gallery/GalleryGrid";

export default function CausesPage() {
  return (
    <>
      <Wrapper>
        <Header title={""} description={""} />
        <BreadCrumb name={"Gallery"} />
        <GalleryGrid />

        <Subscribe />
        <Footer title={""} description={""} />
      </Wrapper>
    </>
  );
}
