"use client";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const Collaborations = () => {
  const collaborations = [
    {
      logo: "/sobha-hartland2/brandLogos/robertoCavalli.svg",
      image: "/sobha-hartland2/collaborations/img1.jpeg",
      title: "Cavalli Tower",
      desc: "Luxurious residences crafted with signature Cavalli style and opulence",
    },
    {
      logo: "/sobha-hartland2/brandLogos/deGrisogono.svg",
      image: "/sobha-hartland2/collaborations/img2.jpeg",
      title: "Canal Heights 1 & 2",
      desc: "Waterfront homes inspired by de GRISOGONO's timeless elegance",
    },
    {
      logo: "/sobha-hartland2/brandLogos/versace.svg",
      image: "/sobha-hartland2/collaborations/img3.jpeg",
      title: "DAMAC Tower Nine Elms",
      desc: "Designer living spaces showcasing Versace's iconic style",
    },
    {
      logo: "/sobha-hartland2/brandLogos/rotana.svg",
      image: "/sobha-hartland2/collaborations/img4.jpeg",
      title: "DAMAC Hills 2 Hotel",
      desc: "An exquisite three-star property managed by Edge by Rotana",
    },
    {
      logo: "/sobha-hartland2/brandLogos/paramount.svg",
      image: "/sobha-hartland2/collaborations/img5.jpeg",
      title: "DAMAC Towers by Paramount",
      desc: "Hollywood-inspired luxury living with cinematic flair",
    },
    {
      logo: "/sobha-hartland2/brandLogos/trump.svg",
      image: "/sobha-hartland2/collaborations/img6.jpeg",
      title: "DAMAC Hills Trump Golf Club",
      desc: "A world-class golf destination with Trump’s distinct signature",
    },
    {
      logo: "/sobha-hartland2/brandLogos/maldives.svg",
      image: "/sobha-hartland2/collaborations/img7.jpeg",
      title: "Mandarin Oriental Bolidhuffaru Reef Resort",
      desc: "A luxury retreat offering world-class hospitality",
    },
    {
      logo: "/sobha-hartland2/brandLogos/radisson.svg",
      image: "/sobha-hartland2/collaborations/img8.jpeg",
      title: "Radisson at DAMAC Hills",
      desc: "Exceptional living spaces paired with Radisson’s unparalleled hospitality",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mainContainer mx-auto ">
        <ScrollReveal>
          <h2 className="h1  text-center mb-6 ">CURATED COLLABORATIONS</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center p1  max-w-5xl mx-auto mb-16">
            DAMAC brings new and exciting living concepts to life, with superior
            designs and details, by working with the finest designers and
            partnering with some of the most prestigious fashion and lifestyle
            brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-6 justify-center w-full">
          {collaborations.map((collab, index) => (
            <ScrollReveal key={collab.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-[10px] shadow-lg group w-full lg:w-[17.5rem]"
              >
                <div className="absolute top-4 left-4 right-4 flex justify-center">
                  <Image
                    src={collab.logo}
                    alt={`${collab.title} logo`}
                    width={120}
                    height={60}
                    className="object-contain w-[120px] h-[60px]"
                  />
                </div>

                <Image
                  src={collab.image}
                  alt={collab.title}
                  width={400}
                  height={500}
                  className="w-full h-[244px] lg:h-80 object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end items-center  lg:px-2 pt-6 pb-3">
                  <h4 className="text-white h4 font-medium mb-2 !tracking-tight text-center">
                    {collab.title}
                  </h4>
                  <p className="text-white p3  text-center">{collab.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
