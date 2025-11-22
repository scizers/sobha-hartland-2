"use client";

import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
// import IslandDestinations from "@/components/IslandDestinations";
// import EverydayParadise from "@/components/EverydayParadise";
// import Amenities from "@/components/Amenities";
// import Gallery from "@/components/Gallery";
// import ParalaxEffect from "@/components/ParalaxEffect";
// import Location from "@/components/Location";
// import WhyDamac from "@/components/WhyDamac";
// import Collaborations from "@/components/Collaborations";
import WhyInvestDubai from "@/components/WhyInvestDubai";
import Payments from "@/components/Payments";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";
// import CtaSection from "@/components/CtaSection";
import AboutSection from "@/components/AboutSection";
import Sophistication from "@/components/Sophistication";
import LifestyleTabs from "@/components/LifeStyleTabs";
import HeroSectionMob from "@/components/HeroSectionMob";

// const statsData = [
//   {
//     id: 1,
//     icon: "/sobha-hartland2/whyDamac/icon1.svg",
//     number: "48,000+",
//     text: "Homes delivered*",
//   },
//   {
//     id: 2,
//     icon: "/sobha-hartland2/whyDamac/icon2.svg",
//     number: "50,100+",
//     text: "In planning and progress*",
//   },
//   {
//     id: 3,
//     icon: "/sobha-hartland2/whyDamac/icon3.svg",
//     number: "100+",
//     text: "Awards received",
//   },
//   {
//     id: 4,
//     icon: "/sobha-hartland2/whyDamac/icon4.svg",
//     number: "7",
//     text: "Countries",
//   },
// ];

// const statsData2 = [
//   {
//     id: 1,
//     icon: "/sobha-hartland2/empoweringImages/icon1.svg",
//     text: "One Million Arab Coders Initiative",
//   },
//   {
//     id: 2,
//     icon: "/sobha-hartland2/empoweringImages/icon2.svg",
//     text: "Community Development Programs",
//   },
//   {
//     id: 3,
//     icon: "/sobha-hartland2/empoweringImages/icon3.svg",
//     text: "Sustainability",
//   },
//   {
//     id: 4,
//     icon: "/sobha-hartland2/empoweringImages/icon4.svg",
//     text: "Educational Support Initiatives",
//   },
// ];

export default function Main() {
  const [openPopup, setOpenPopup] = useState(false);

  // const [initialPopupShown, setInitialPopupShown] = useState(false);
  const timerRef = useRef(null);

  // useEffect(() => {
  //   if (!initialPopupShown) {
  //     timerRef.current = setTimeout(() => {
  //       if (!openPopup) {
  //         setOpenPopup(true);
  //         setInitialPopupShown(true);
  //       }
  //     }, 5000);
  //   }

  //   return () => clearTimeout(timerRef.current);
  // }, [initialPopupShown, openPopup]);

  const handleOpenPopup = () => {
    clearTimeout(timerRef.current);
    setOpenPopup(true);
    setInitialPopupShown(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroSectionMob
        src="/sobha-hartland2/backgrounds/newMob.jpg"
        alt="Mobile Hero Image"
        className="lg:hidden"
        onOpenPopup={handleOpenPopup}
      />
      <HeroSection onOpenPopup={handleOpenPopup} />
      <AboutSection />
      <Sophistication />
      <LifestyleTabs onOpenPopup={handleOpenPopup} />
      {/* <CtaSection onOpenPopup={handleOpenPopup} />
      <IslandDestinations onOpenPopup={handleOpenPopup} />
      <Amenities onOpenPopup={handleOpenPopup} />
      <EverydayParadise onOpenPopup={handleOpenPopup} />
      <Gallery />
      <ParalaxEffect
        image="/sobha-hartland2/backgrounds/girlInPool.jpeg"
        heightClass="h-96 lg:h-[80vh]"
      />
      <Location />
      <WhyDamac
        heading="WHY DAMAC PROPERTIES?"
        description="Renowned for iconic developments and exceptional craftsmanship, DAMAC Properties blends elegance, innovation, and world-class amenities..."
        stats={statsData}
        videoId="1DAr41GhgVM"
        footerText="*As of Dec, 2025"
      /> */}
      {/* <Collaborations />
      <WhyDamac
        heading="EMPOWERING COMMUNITIES, BUILDING FUTURES"
        description="The Hussain Sajwani DAMAC Foundation is a testament to our commitment to creating a positive impact. From supporting the One Million Arab Coders Initiative to our sustainability efforts, we believe in building a better tomorrow. Discover how we’re making a difference, one initiative at a time."
        stats={statsData2}
        videoId="beZqmuz2pI8"
      /> */}
      <WhyInvestDubai />
      <Payments />
      <Footer />

      {openPopup && <ApplyForm onClose={handleClosePopup} />}
    </main>
  );
}
