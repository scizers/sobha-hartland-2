"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSectionMob({
  src,
  alt,
  className = "",
  onOpenPopup,
}) {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);
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
    <div className={`w-full relative ${className}`} ref={heroRef}>
      <Image
        src={src}
        alt={alt}
        width={650}
        height={800}
        className="w-full h-auto object-cover"
        priority
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isSticky ? 0 : 100,
          opacity: isSticky ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-50   backdrop-blur-md  lg:py-3  shadow-lg "
      >
        <div className=" mx-auto flex  lg:gap-3 items-center justify-start">
          <Button
            variant="black"
            className=" !px-6 !h-14 !font-bold w-1/2 sm:w-auto !rounded-none !text-[10px]"
            onClick={onOpenPopup}
          >
            GET AN INSTANT CALL BACK
          </Button>
          <Button
            variant="gold"
            className=" flex !h-14 items-center justify-center gap-2 !pl-4 !pr-6 !font-bold w-1/2 sm:w-auto !text-[10px] !rounded-none"
            onClick={onOpenPopup}
          >
            {/* <Image
                src="/sobha-hartland2/icons/download.svg"
                alt="Download Icon"
                width={20}
                height={20}
                className="w-8 h-8"
              /> */}
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
