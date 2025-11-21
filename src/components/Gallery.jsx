import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const galleryImages = [
  "/sobha-hartland2/galleryImages/img1.jpeg",
  "/sobha-hartland2/galleryImages/img2.jpeg",
  "/sobha-hartland2/galleryImages/img3.jpeg",
  "/sobha-hartland2/galleryImages/img4.jpeg",
  "/sobha-hartland2/galleryImages/img5.jpeg",
  "/sobha-hartland2/galleryImages/img6.jpeg",
  "/sobha-hartland2/galleryImages/img7.jpeg",
  "/sobha-hartland2/galleryImages/img8.jpeg",
  "/sobha-hartland2/galleryImages/img9.jpeg",
  "/sobha-hartland2/galleryImages/img10.jpeg",
  "/sobha-hartland2/galleryImages/img11.jpeg",
];

const Gallery = () => {
  const openLightbox = (index) => {
    console.log("Open lightbox for image:", index);
  };

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="mainContainer mx-auto ">
        <ScrollReveal>
          <h2 className="h1 text-center mb-12 text-gray-900">GALLERY</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageSrc, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.05}
              className={`overflow-hidden ${
                index === galleryImages.length - 1
                  ? "col-span-2 row-span-1 "
                  : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative  rounded-lg cursor-pointer h-48
         
        `}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={imageSrc}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white text-4xl"
                  >
                    +
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
