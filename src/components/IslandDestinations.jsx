"use client";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

import { Button } from "./ui/button";

const IslandDestinations = ({ onOpenPopup }) => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url("/sobha-hartland2/backgrounds/blueBg.jpeg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-[600px] xl:min-h-screen flex items-center justify-center  "
    >
      <div className="mainContainer relative z-10 flex flex-col items-center text-center md:text-left  py-10 lg:py-20">
        <ScrollReveal>
          <div className="text-center mb-10 lg:mb-6 xl:mb-10">
            <h2 className="h1 font-bold mb-4 text-white">
              INSPIRED BY SIX OF THE
            </h2>
            <p className="h2 playfair-italic text-white ">
              world's best tropical island <br /> destinations
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
              <Image
                src="/sobha-hartland2/topicalIsland/destinations.svg"
                alt="Island Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6 text-white">
              <p className="p2 max-w-4xl mx-auto leading-relaxed">
                DAMAC Islands emerges as an oasis of wonder, nestled within
                Dubai's vibrant landscape.
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-14 mt-6 pb-10 lg:pb-4 xl:pb-5 text-white p3">
                <div className="flex flex-col items-center justify-between ">
                  <Image
                    src="/sobha-hartland2/topicalIsland/maldives-icon.svg"
                    alt="MALDIVES"
                    width={45}
                    height={45} // make all icons square or same height
                    className="mb-2 h-[45px] w-[45px]"
                  />
                  <span className=" ">MALDIVES</span>
                </div>

                <div className="flex flex-col items-center justify-between border-x border-white">
                  <Image
                    src="/sobha-hartland2/topicalIsland/bora-bora-icon.svg"
                    alt="BORA BORA"
                    width={45}
                    height={45}
                    className="mb-2 h-[45px] w-[45px]"
                  />
                  <span className=" ">BORA BORA</span>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <Image
                    src="/sobha-hartland2/topicalIsland/seychelles-icon.svg"
                    alt="SEYCHELLES"
                    width={45}
                    height={45}
                    className="mb-2 h-[45px] w-[45px]"
                  />
                  <span className=" ">SEYCHELLES</span>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <Image
                    src="/sobha-hartland2/topicalIsland/hawaii-icon.svg"
                    alt="HAWAII"
                    width={62}
                    height={23}
                    className="mb-2 h-[23px] w-[62px]"
                  />
                  <span className="">HAWAII</span>
                </div>

                <div className="flex flex-col items-center justify-between border-x border-white">
                  <Image
                    src="/sobha-hartland2/topicalIsland/bali-icon.svg"
                    alt="BALI"
                    width={29}
                    height={45}
                    className="mb-2 h-[45px] w-[29px]"
                  />
                  <span className="">BALI</span>
                </div>

                <div className="flex flex-col items-center justify-between">
                  <Image
                    src="/sobha-hartland2/topicalIsland/fiji-icon.svg"
                    alt="FIJI"
                    width={40}
                    height={45}
                    className="mb-2 h-[45px] w-[40px]"
                  />
                  <span className=" ">FIJI</span>
                </div>
              </div>

              <p className="p2 leading-relaxed">
                Imagine waking up each day to the blissful vibes of the world's
                most enchanting islands, from the serenity of the Maldives to
                the charm of Seychelles. DAMAC Islands isn't just a place to
                live; it's a perpetual journey through the world's most
                beautiful island destinations.
              </p>

              <p className="p2">
                Let your imagination drift as you discover what it means to{" "}
                <span className="font-bold">
                  Live the island state of mind.
                </span>
              </p>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="!px-14"
                  onClick={onOpenPopup}
                >
                  KNOW MORE
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IslandDestinations;
