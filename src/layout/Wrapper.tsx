 
 'use client';

import { customAnimation } from "@/custom/custom";
 import { useEffect } from "react";  
//  import { gsap } from 'gsap';
 
//  import animationTitle from "@/utils/animationTitle";
//  import DarkLight from "@/components/common/DarkLight";
//  import MouseMove from "@/components/common/MouseMove";
//  import ScrollToTop from "@/components/common/ScrollToTop";
 
//  import { scrollSmother } from "@/utils/scrollSmother";
//  import { buttonAnimation } from "@/utils/buttonAnimation";
 
 
//  import { ScrollSmoother, } from "@/plugins";
//  gsap.registerPlugin(ScrollSmoother);
 
 
 const Wrapper = ({ children }: any) => {  
 
   useEffect(() => {
    //  if (typeof window !== "undefined") {
    //    ScrollSmoother.create({
    //      smooth: 1.35,
    //      effects: true,
    //      smoothTouch: false,
    //      normalizeScroll: false,
    //      ignoreMobileResize: true,
    //    });
    //  }
   }, []);
 
   useEffect(() => {
    customAnimation()
 
     // buttonAnimation()
     // animationTitle()
    //  scrollSmother();
   }, [])
 
 
 
   return <>
     {/* <MouseMove /> */}
     {children}
     {/* <ScrollToTop /> */}
     {/* <DarkLight /> */}
     <div className="go-top">
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
    </div>
   </>;
 };
 
 export default Wrapper;
 
 