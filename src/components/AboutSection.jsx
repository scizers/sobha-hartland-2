"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#11151c]">
      <div className="relative w-full bg-white pt-10 lg:pb-10 rounded-t-[30px] overflow-hidden   lg:-translate-y-6">
        {/* Top colored overlay */}
        <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-[#d4d3d4] via-[#d4d3d4]/10 to-transparent lg:rounded-t-2xl pointer-events-none"></div>

        <div className="mainContainer mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Logo + Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-3 w-full   ">
            <Image
              src="/sobha-hartland2/sobhaLogo.svg"
              alt="Sobha Hartland"
              width={130}
              height={50}
              className="w-full max-w-[200px] xl:max-w-[250px]"
            />
          </div>

          {/* Stats */}
          <div className="flex flex-col  justify-center gap-6 lg:col-span-9 w-full lg:pl-16 border-t lg:border-l lg:border-t-0 border-gray-200">
            <h2 className="mt-3 h4  tracking-widest text-gray-600 text-start">
              DUBAI’S MOST{" "}
              <span className="italic text-black h3">
                Premium Master Community
              </span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-4 w-full">
              <StatItem
                icon="/sobha-hartland2/about/svg1.svg"
                value="8"
                label="Million Sq. Ft."
                sub="Total Land Area"
                width={40}
                height={40}
              />

              <StatItem
                icon="/sobha-hartland2/about/svg2.svg"
                value="12000+"
                sub="Residential Units"
                width={60}
                height={60}
              />

              <StatItem
                icon="/sobha-hartland2/about/svg3.svg"
                value="39%"
                sub="Open Spaces"
                width={38}
                height={38}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mainContainer mx-auto mt-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-20">
          {/* Text Block */}
          <div className="w-full  text-gray-900 p1 leading-relaxed text-[17px] lg:col-span-5">
            <p className="mb-8">
              Sobha Hartland II marks the next chapter in the remarkable success
              of Sobha Hartland, redefining luxury living across 8 million
              square feet. Located near its predecessor, this exceptional
              community seamlessly blends urban convenience with natural beauty,
              offering residents easy access to the city’s top malls, business
              districts, and attractions, while providing a peaceful escape in a
              vibrant, centrally connected sanctuary.
            </p>

            <p>
              Sobha Hartland II is a private, gated community where nature’s
              splendor thrives, offering an extraordinary lifestyle that
              transcends the ordinary and immerses you in unparalleled luxury.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20% 0px" }}
            className="w-full lg:col-span-7"
          >
            <Image
              src="/sobha-hartland2/about/womanPool.webp"
              alt="Relaxing in Water"
              width={900}
              height={700}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, value, label, sub, width = 50, height = 50 }) {
  return (
    <div className="flex justify-start items-center text-start gap-4">
      <div className="w-[50px] lg:w-[60px]">
        <Image
          src={icon}
          alt="icon"
          width={width}
          height={height}
          className="mb-1 flex-shrink-0  h-auto"
        />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-[22px] md:text-[26px] font-semibold text-black">
          {value}{" "}
          <span className="text-[13px] text-gray-600 leading-tight">
            {label}
          </span>
        </h3>

        {sub && <p className="text-[12px] text-gray-700">{sub}</p>}
      </div>
    </div>
  );
}
