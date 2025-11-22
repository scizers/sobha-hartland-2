"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function HeroSectionMob({
  src,
  alt,
  className = "",
  onOpenPopup,
}) {
  return (
    <div className={`w-full relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={650}
        height={800}
        className="w-full h-auto object-cover"
        priority
      />

      {/* PERMANENT FIXED BUTTON BAR */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg"
      >
        <div className="mx-auto flex items-center justify-start">
          <Button
            variant="black"
            className="!px-6 !h-14 !font-bold w-1/2 sm:w-auto !rounded-none !text-[10px]"
            onClick={onOpenPopup}
          >
            GET AN INSTANT CALL BACK
          </Button>

          <Button
            variant="gold"
            className="flex !h-14 items-center justify-center gap-2 !pl-4 !pr-6 !font-bold w-1/2 sm:w-auto !text-[10px] !rounded-none"
            onClick={onOpenPopup}
          >
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
