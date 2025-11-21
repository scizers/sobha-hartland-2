"use client";
import { ScrollReveal } from "@/components/ScrollReveal";

import { Button } from "./ui/button";

const EverydayParadise = ({ onOpenPopup }) => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url("/sobha-hartland2/backgrounds/blueBg.jpeg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full lg:h-[550px] flex items-center justify-center"
    >
      <div className="mainContainer relative z-10 flex flex-col items-center text-center md:text-left  py-10 lg:py-0">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="h1  mb-4 text-white">YOUR EVERYDAY PARADISE</h2>
            <p className="p1 text-white mb-6 ">
              DAMAC Islands is a place where paradise is a state of mind, a
              lifestyle that brings the serene rhythm of island living to the
              heart of Dubai. DAMAC Islands is inspired by the world’s most
              beautiful tropical destinations, offering a retreat that merges
              lush landscapes with urban sophistication.
            </p>
            <p className="p1  text-white ">
              Here, DAMAC Islands townhouses and luxury villas open to
              breathtaking views of lagoons and greenery, blurring the
              boundaries between indoors and nature. DAMAC Seychelles is where
              each day feels like an escape, making paradise an everyday
              reality.
            </p>
            <div className="mt-10">
              <Button
                variant="outline"
                className="!px-14"
                onClick={onOpenPopup}
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EverydayParadise;
