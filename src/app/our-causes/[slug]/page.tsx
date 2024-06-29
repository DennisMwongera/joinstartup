"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/layout/Header/Header";
import Wrapper from "@/layout/Wrapper";
import Footer from "@/layout/Footer/Footer";

import Subscribe from "@/components/Subscribe/Subscribe";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import { useParams } from "next/navigation";
import CauseDetail from "@/components/Cause/CauseDetail";
export default function CausesDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <Wrapper>
        <Header title={""} description={""} />
        <BreadCrumb name={slug.toUpperCase()} />
        {/* <GalleryGrid /> */}
        <CauseDetail slug={slug}/>
        <Subscribe />
        <Footer title={""} description={""} />
      </Wrapper>
    </>
  );
}
