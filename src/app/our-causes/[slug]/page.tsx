import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/layout/Header/Header";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer/Footer";

import Subscribe from "@/components/Subscribe/Subscribe";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import CauseDetail from "@/components/Cause/CauseDetail";
import { causeDetailData } from "@/data/cause";
export default function CausesDetailPage() {
  return (
    <>
      <Wrapper>
        <Header title={""} description={""} />
        <BreadCrumb/>
        {/* <GalleryGrid /> */}
        <CauseDetail />
        <Subscribe />
        <Footer title={""} description={""} />
      </Wrapper>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(causeDetailData).map((key: string) => ({
    slug: key,
  }));
  // const posts = await fetch('https://.../posts').then((res) => res.json())
}
