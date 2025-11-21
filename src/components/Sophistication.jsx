"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sophistication() {
  return (
    <section className="relative w-full bg-[#ffffff] pt-10 pb-16 overflow-hidden">
      <div className="mx-auto">
        <h2 className="mb-12 h3 tracking-widest text-gray-600 text-center">
          STEP INTO{" "}
          <span className="italic text-black h1">
            A World Of Sophistication
          </span>
        </h2>

        <Image
          src="/sobha-hartland2/backgrounds/sophistication.webp"
          alt="Relaxing in Water"
          width={2863}
          height={1542}
          priority
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
