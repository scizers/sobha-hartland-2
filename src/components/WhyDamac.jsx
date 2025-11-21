"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyDamac = ({ heading, description, stats, videoId, footerText }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <section
      className="relative bg-[#f8f6f3] py-16 lg:py-24"
      style={{
        backgroundImage: "url('/sobha-hartland2/backgrounds/greyMarbel.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mainContainer mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-[#1a1f1c] h1 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="max-w-5xl p1 mb-12 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 w-full pb-16 lg:pb-0">
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:row-span-2 gap-5 lg:col-span-5 lg:h-[420px] order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {stats.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-[#ededed] w-full h-full p-4 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[88px] w-[88px] mb-2">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl">{item.number}</h3>
                <p className="text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Video */}
          <motion.div
            className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="DAMAC Properties Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {footerText && (
          <p className="p4 text-left w-full -mt-14">{footerText}</p>
        )}
      </div>
    </section>
  );
};

export default WhyDamac;
