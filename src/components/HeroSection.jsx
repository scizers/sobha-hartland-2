"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { sobhaLogo } from "@/app/icons/icons";

const HeroSection = ({ onOpenPopup }) => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  // Watch scroll to detect when hero section ends
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative   w-full overflow-hidden hidden lg:block"
      ref={heroRef}
    >
      <div
        className="
    relative w-full
    h-screen
    bg-cover bg-center bg-no-repeat
    bg-[url('/sobha-hartland2/backgrounds/heroBg.webp')]
  "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent w-full h-[60%]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent w-[60%] "></div>
        <div className="absolute bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent w-full h-[60%]"></div>

        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-[3] text-center">
          <div className="w-full flex justify-center">{sobhaLogo}</div>
        </div>

        <div className="relative left-0 top-1/2 -translate-y-1/2 z-[3] lg:flex flex-col justify-start items-start mainContainer mx-auto  ">
          <h1 className="text-white h3  mb-6 ">
            <span className="uppercase tracking-tighter ">
              Invest Right in the{" "}
            </span>
            <br />
            <span className="italic text-[35px] lg:text-[45px] text-darkGold mt-[4px] inline-block">
              Centre of Dubai
            </span>
          </h1>
          <div className="space-y-6 md:space-y-6 text-white mb-6">
            <LocationItem
              title="DUBAI DESIGN DISTRICT"
              subtitle="8 MINUTES AWAY - 6.7 KM"
            />
            <LocationItem
              title="RAS AL KHOR WILDLIFE SANCTUARY"
              subtitle="5 MINUTES AWAY - 6 KM"
            />
            <LocationItem
              title="DOWNTOWN DUBAI"
              subtitle="10 MINUTES AWAY - 8.7 KM"
            />
            <LocationItem
              title="DUBAI MALL"
              subtitle="13 MINUTES AWAY - 8.9 KM"
            />
            <LocationItem
              title="BURJ AL ARAB"
              subtitle="28 MINUTES AWAY - 24 KM"
            />
          </div>
          <h2 className=" p1 !tracking-normal text-darkGold ">
            <span className="uppercase tracking-tighter">Apartments from </span>{" "}
            <span className="font-bold h3 !tracking-normal ">1.6 M AED</span>
            <span className=" h3  "> | </span>
            <span className="font-bold h3 !tracking-normal ">436,000 USD</span>
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isSticky ? 0 : 100,
          opacity: isSticky ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-darkGold/70 backdrop-blur-md  py-3  shadow-lg "
      >
        <div className="mainContainer mx-auto flex flex-col sm:flex-row gap-3 items-center justify-start">
          <Button
            variant="black"
            className=" !px-6 !font-bold !rounded-none"
            onClick={onOpenPopup}
          >
            GET AN INSTANT CALL BACK
          </Button>
          <Button
            variant="white"
            className=" flex items-center justify-center gap-2 !pl-4 !pr-6 !font-bold !rounded-none"
            onClick={onOpenPopup}
          >
            <Image
              src="/sobha-hartland2/icons/download.svg"
              alt="Download Icon"
              width={20}
              height={20}
              className="w-8 h-8"
            />
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
function LocationItem({ title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src="/sobha-hartland2/icons/location.svg"
        alt="location Icon"
        width={20}
        height={20}
        className="w-8 h-8"
      />
      <div>
        <p className="p1 font-semibold tracking-wide">{title}</p>
        <p className="text-[12px] md:text-[14px] opacity-90">{subtitle}</p>
      </div>
    </div>
  );
}
export default HeroSection;
