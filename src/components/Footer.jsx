"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  text-white overflow-hidden">
      {/* Background */}
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

      <div className="relative z-10 mainContainer mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-28 lg:pb-32 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="">
          <Image
            src="/sobha-hartland2/damacLogos/trustin.svg"
            alt="Trustin Homes"
            width={150}
            height={40}
          />
        </div>

        {/* Social Media Links */}
        {/* <div className="flex gap-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/socialMedia/fb.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/socialMedia/twitter.svg"
              alt="Twitter"
              width={40}
              height={40}
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/socialMedia/insta.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/socialMedia/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/socialMedia/youtube.svg"
              alt="YouTube"
              width={40}
              height={40}
            />
          </a>
        </div> */}

        {/* Copyright */}
        <p className="text-gray-300 p4 text-center">
          © Trustin Homes - 2025 | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
