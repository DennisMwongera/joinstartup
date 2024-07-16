import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/layout/Header/Header";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer/Footer";

import Donate from "@/components/Donate/Donate";
import BlogThumb from "@/components/Blog/Blog";
import Subscribe from "@/components/Subscribe/Subscribe";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import AboutPageMain from "@/components/About/Page/AboutPageMain";
import AboutService from "@/components/About/Page/AboutWhatWeDon";

export default function AboutPage() {
  return (
    <>
      <Wrapper>
        <Header title={""} description={""} />
        <BreadCrumb name={"MarketPlace"} />
        {/*<AboutPageMain />*/}
        <AboutService/>

        <Donate donationLink={""} />
        {/*<BlogThumb />*/}
        {/*<Subscribe />*/}
        <Footer title={""} description={""} />
      </Wrapper>
    </>
  );
}
