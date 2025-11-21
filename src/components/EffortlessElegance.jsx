"use client";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const EffortlessElegance = () => {
  return (
    <section className="relative pt-[100px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sobha-hartland2/backgrounds/greenMarbel.jpeg"
          alt="Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mainContainer mx-auto ">
        <div className="grid md:grid-cols-2 gap-2 justify-end items-end">
          <ScrollReveal direction="left">
            <div className="pb-[100px]">
              <Image
                src="/sobha-hartland2/damacLogos/damacLiving.svg"
                alt="DAMAC Living"
                width={113}
                height={80}
                className="mb-6"
              />

              <h2 className="h1 font-bold mb-10">EFFORTLESS ELEGANCE</h2>

              <p className="p1 !tracking-tight mb-10 max-w-lg">
                Manage your DAMAC property effortlessly with the DAMAC Living
                app. From service requests to secure payments and instant
                updates, everything you need is just a tap away for a smooth,
                convenient experience.
              </p>

              <div className="flex gap-4">
                <a href="#" className="inline-block">
                  <Image
                    src="/sobha-hartland2/damacLiving/playstore.png"
                    alt="Get it on Google Play"
                    width={190}
                    height={55}
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src="/sobha-hartland2/damacLiving/appstore.png"
                    alt="Download on the App Store"
                    width={190}
                    height={55}
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative flex justify-end items-end h-full">
              <div className="relative w-full ">
                <div className="absolute bottom-0 left-0  z-20">
                  <Image
                    src="/sobha-hartland2/damacLiving/src1.png"
                    alt="DAMAC App Screen 1"
                    height={450}
                    width={408}
                    className="object-contain  w-[300px] h-auto "
                  />
                </div>

                <div className="absolute bottom-10 right-[150px] z-10">
                  <Image
                    src="/sobha-hartland2/damacLiving/src2.png"
                    alt="DAMAC App Screen 2"
                    height={402}
                    width={214}
                    className="object-contain  w-[214px] h-auto "
                  />
                </div>

                {/* Front Image (slightly left) */}
                <div className="absolute bottom-0 right-0  z-20">
                  <Image
                    src="/sobha-hartland2/damacLiving/src3.png"
                    alt="DAMAC App Screen 3"
                    height={402}
                    width={214}
                    className="object-contain  w-[214px] h-auto "
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EffortlessElegance;
