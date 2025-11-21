"use client";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import { Button } from "./ui/button";

const Amenities = ({ onOpenPopup }) => {
  const amenities = [
    { name: "Aqua park", image: "/sobha-hartland2/amenities/img1.jpeg" },
    { name: "Waterfall lagoon", image: "/sobha-hartland2/amenities/img2.jpeg" },
    { name: "Jungle river", image: "/sobha-hartland2/amenities/img3.jpeg" },
    { name: "Jungle swing", image: "/sobha-hartland2/amenities/img4.jpeg" },
    { name: "Aqua dome", image: "/sobha-hartland2/amenities/img5.jpeg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mainContainer mx-auto ">
        <ScrollReveal>
          <h2 className="h1 text-center mb-6 text-gray-900">AMENITIES</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center p1 max-w-5xl mx-auto mb-16">
            Discover experiences designed to elevate your senses, where tranquil
            lagoons, lush jungle rivers, exhilarating water adventures, and
            serene escapes come together to create an idyllic paradise.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-12 mb-12">
          {amenities.map((amenity, index) => (
            <ScrollReveal key={amenity.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-[111px] w-[111px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden mb-2 lg:mb-4 shadow-lg">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="p1 text-gray-900">{amenity.name}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button variant="outlineBlack" onClick={onOpenPopup}>
              ENQUIRE NOW
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Amenities;
