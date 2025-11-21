"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f8f8f8]">
      <div className="absolute inset-0">
        <Image
          src="/sobha-hartland2/backgrounds/greenMarbel.jpeg"
          alt="Thank You Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-6 sm:px-12 text-white max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-oswald tracking-wide uppercase">
          Thank You!
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 font-poppins">
          Your submission has been received successfully. Our team will get in
          touch with you shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#e0e0e0] transition duration-300"
        >
          Back to Home
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
}
