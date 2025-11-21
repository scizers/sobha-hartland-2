"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function BgSection({ onOpenPopup }) {
  return (
    <section className="relative w-full  overflow-hidden flex items-center">
      <motion.div className="absolute inset-0 hidden lg:block">
        <Image
          src="/sobha-hartland2/cta.jpg"
          alt="DAMAC Islands cta"
          fill
          className="object-cover "
          priority
        />
      </motion.div>
      <motion.div className="absolute inset-0 lg:hidden">
        <Image
          src="/sobha-hartland2/backgrounds/ctaMob.jpg"
          alt="DAMAC Islands cta"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>
      {/* Content */}
      <div className="relative h-[29rem]  2xl:h-[23.75rem]  z-10 container flex justify-start items-center text-center lg:justify-center lg:items-end lg:text-end flex-col gap-4 lg:gap-8  pt-10 pb-40 lg:py-20 text-white">
        <h2 className="h2  font-semibold">
          A NEW CHAPTER IN
          <br />
          ISLAND LIVING BEGINS
        </h2>

        <p className="max-w-lg text-lg md:text-xl opacity-90 ">
          TOWNHOUSES, TWIN VILLAS AND LUXURY VILLAS STARTING FROM AED 2.75
          MILLION*
        </p>
        <div>
          <Button variant="outline" className="" onClick={onOpenPopup}>
            GET AN INSTANT CALL BACK
          </Button>
          <p className="text-white p4 mt-4 lg:mt-6">
            *Terms and conditions apply. Prices are subject to change based on
            availability of units.
          </p>
        </div>
      </div>
    </section>
  );
}
